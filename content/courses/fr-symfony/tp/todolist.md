---
title: TP - Todolist
type: 2_exercise
level: 1
---

## Objectif du TP

Comprendre l’importance d’une structure MVC.

## Pré-requis

Récupérez le contenu suivant et mettez-le dans un fichier nommé `index.php` :

<script>
function copy_to_clipboard(event)
{
    const code = document.getElementById("sourcecode").value;
    navigator.clipboard.writeText(code);
    event.value = "COPIED !";
    setTimeout(() => {
        event.value = "COPY";
    }, 2000);
}
</script>

<details>
<summary>Code source complet</summary>
<input type="button" value="COPY" onclick="copy_to_clipboard(this)"/>


<textarea id="sourcecode" style="width: 100%; height: 500px; border: 1px solid black">
<?php
define("DATABASE_FILE", "./data.db");
$table = "tasks";
$tasks = [];
if (!file_exists(DATABASE_FILE)) {
    $database = new SQLite3(DATABASE_FILE);
    $database->exec(<<<SQL
        create table $table 
        (
            id INTEGER
                constraint tasks_pk
                    primary key autoincrement,
            name TEXT,
            checked INTEGER default 0
        );
        INSERT INTO $table (id, name, checked) VALUES (1, 'Task to be done', 0);
        INSERT INTO $table (id, name, checked) VALUES (2, 'Task done', 1);

SQL
);
header("Location: /");
}
$database = new SQLite3(DATABASE_FILE);
?>
<html>
<head>
    <meta charset="utf-8"/>
    <title>My Todo List</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-1/css/all.min.css"/>
    <style>
        body {
            font-family: arial;
            padding: 0px;
            margin: 0px;
        }

        .checked {
            text-decoration: line-through;
        }

        .btn-no-style {
            border: none;
            background-color: transparent;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        input {
            cursor: pointer;
        }

        .taskname-column {
            width: 90%;
        }

        table tr:nth-of-type(2n+1) {
            background-color: #EAEAEA;
        }

        th {
            font-size: 100px;
        }

        .checked-icon {
            color: #48a868;
        }

        .checked-icon-grey {
            color: #AAAAAA;
        }

        .trash-icon {
            color: red;
        }

        td {
            padding: 10px;

        }

        button {
            cursor: pointer !important;
        }

        i {
            font-size: 25px !important;
        }
    </style>

</head>
<body>
<?php

if (isset($_GET["action"])) {
switch ($_GET["action"]) {
case "uncheck":
if (isset($_GET["id"])) {
$id = $_GET["id"];
$database->exec(<<<SQL
UPDATE $table set checked=0 WHERE id=$id;
SQL
);
}
header("Location: /");
break;
case "check":
if (isset($_GET["id"])) {
$id = $_GET["id"];
$database->exec(<<<SQL
UPDATE $table set checked=1 WHERE id=$id;
SQL
);
}
header("Location: /");
break;
case "delete":
if (isset($_GET["id"])) {
$id = $_GET["id"];
$database->exec(<<<SQL
DELETE FROM $table WHERE id=$id;
SQL
);
}
header("Location: /");
break;
case "add":
if (isset($_GET["name"])) {
$name = $_GET["name"];
$name = addslashes($name);
$database->exec(<<<SQL
INSERT INTO $table (name) values('$name')
SQL
);
}
header("Location: /");
break;
default:
echo "An error has occured";
die();
}
}

$query = $database->query(<<<SQL
SELECT * FROM $table ORDER BY checked DESC;
SQL
);
if (!$query)
die("Impossible to execute query.");

while ($row = $query->fetchArray(SQLITE3_ASSOC)) {
$tasks[] = $row;
}
?>
<table>
    <tr>
        <th></th>
        <th class="taskname-column">Todo</th>
        <th></th>
    </tr>
    <?php
    foreach ($tasks as $task) {
        echo "<tr><form method='get' action=''><td>";
        echo "<input type='hidden' name='id' value='" . $task["id"] . "'>";
        if ($task["checked"]) {
            echo "<button class='btn-no-style' type='submit' name='action' value='uncheck'><i class='checked-icon fas fa-check'></i></button>";
        } else {
            echo "<button class='btn-no-style' type='submit' name='action' value='check'><i class='checked-icon-grey fas fa-check'></i></button>";
        }
        echo "</td><td class='" . ($task["checked"] ? 'checked' : '') . "'>";
        echo $task["name"];
        echo "</td><td>";

        echo "<button class='btn-no-style' type='submit' name='action' value='delete'><i class='trash-icon fas fa-trash'></i></button>";

        echo "</form>";
        echo "</td></tr>";
    }
    ?>

</table>

<form method="get" action="">
    <input type="text" name="name" autofocus="autofocus"/>
    <button type="submit" name="action" value="add">Add Item</button>
</form>

</body>
</html>
</textarea>
</details>



Pour l'exécuter, lancez la commande :

```bash
php -S 0.0.0.0:8000
```

Rendez-vous sur [localhost:8000](http://localhost:8000/). C'est une todo-list app, une liste des tâches. Elle stocke ses
données en base et permet l'ajout de tâches, la suppression ainsi que la possibilité de cocher ces cases.

> [!CAUTION] Cette application est dégueulasse.

L'objectif est donc de faire le ménage dans cette application.

## Étape 1 - Réparer le workflow

Actuellement, l'application envoie le warning suivant :

```
Warning: Cannot modify header information - headers already sent by (output started at /path/to/index.php:25) in /path/to/index.php on line 116
```

Cela est dû au fait que des données sont envoyées au navigateur avant l'appel à la fonction `header()`. Il faut donc
réorganiser le code pour que cela n'arrive plus.

Déplacez le code de gestion des actions (check, uncheck, delete, add) avant tout code HTML.

## Étape 2 - Base de données

On va commencer par créer un dossier qu'on va appeler `model`.

Dans ce dossier model, on va créer 2 classes, une classe `TaskRepository` et une classe qui va s'appeler `Database`

Dans la classe Database, on va créer une propriété privée statique de type `PDO`, un constructeur privé qui prend une
chaîne de caractère en paramètres, et deux méthodes, une pour initialiser la base, et l'autre pour récupérer la
propriété privée statique initialisée.

Voici un exemple de ce qui est attendu :

```php
final class Database
{

    private static $instance = null;
    private PDO $pdo;

    private function __construct($path)
    {
        $this->pdo = new PDO("sqlite:$path");
    }

    public static function initialize($path)
    {
        if (self::$instance !== null) {
            throw new Exception("configuration as already been initialized");
        }
        self::$instance = new self($path);
    }

    public static function getInstance(): PDO
    {
        return self::$instance->pdo;
    }
}
```

C'est un _singleton_.

Dans la classe `TaskRepository`, on va créer les méthodes suivantes :

```php
<?php
class TaskRepository
{
    const TABLE = "tasks";
    public function initialize(){} // creer la table si elle n'existe pas
    public function getAll(){} // recuperer toutes les entrees
    public function update($id, $checked=false){} //Mettre à jour l'état 
    public function add($description){} //ajouter une task
    public function delete($id){} //supprimer une task
}
```

En utilisant la méthode `getInstance`, implémenter les méthodes pour initialiser la base, récupérer toutes les tâches,
les mettre à jour, en ajouter ou en supprimer.

Pour vérifier si une table existe :

```sql
SELECT name
FROM sqlite_master
WHERE type = 'table'
  AND name = 'myTable'
```

Après avoir implémenté la classe `TaskRepository`, il faut instancier la classe dans le fichier index.php, et remplacer
tous les appels SQL par l'appel de ces méthodes.

```php
Database::initialize(__DIR__ . "/data.db");

$taskRepository = new TaskRepository();
$taskRepository->initialize();
```

Si tout se passe bien, le projet continue à fonctionner sans problème.

## Étape 3 - Simplifier l'intégration PHP/HTML

La seconde étape est de simplifier pour séparer le PHP et l'HTML.

Pour cela, on va
utiliser [la syntaxe alternative PHP](https://www.php.net/manual/fr/control-structures.alternative-syntax.php).

En même temps, on va sortir le css dans un fichier `style.css`.

Si tout se passe bien, le projet continue à fonctionner sans problème.

## Étape 4 - Séparer l'HTML

Extraire toute la partie HTML dans un fichier appelé template.php et l'inclure au fichier index.php. À ce niveau dans le
fichier index.php, il ne reste plus que le contrôle et le choix des actions.

## Étape 5 - Composer et réorganisation

Pour cette étape, on va utiliser Composer. Installez composer et ajoutez le fichier composer.json avec le contenu suivant :

```json
{
    "name": "henri/tp1",
    "authors": [
        {
            "name": "Henri Larget",
            "email": "henri@larget.fr"
        }
    ],
    "require": {},
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    }
}
```

Créez un dossier `src` et déplacez le dossier model dans le dossier src. Dans les 2 fichiers du modèle, ajoutez avant la déclaration de la classe :

```php
namespace App\model;

use \PDO;
use \Exception;
```

Remplacez les inclusions par les inclusions suivantes :

```php
require __DIR__ . "/vendor/autoload.php";
use App\model\Database;
use App\model\TaskRepository;
```

Testez l'application, et normalement c'est une erreur.

Installez les dépendances composer en utilisant la commande `composer install`.

Corrigez les erreurs et testez à nouveau l'application.

Si tout se passe bien, le projet continue à fonctionner sans problème.

## Étape 6 - Bonus

Pour aller plus loin, on veut ajouter [HTTP Foundation](https://symfony.com/doc/current/components/http_foundation.html) de Symfony pour gérer les requêtes et réponses HTTP.
