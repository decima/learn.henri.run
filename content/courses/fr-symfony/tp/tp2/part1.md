---
title: "partie 1"
level: 2
type: parties
---
## Mise en place du projet

Première étape : installez composer.

### Installer Composer en Local

Pour installer composer vous pouvez :

Téléchargez la [dernière version](https://getcomposer.org/download/latest-stable/composer.phar). Vous aurez un fichier `composer.phar`, que vous pouvez appeler via la commande

```bash
php composer.phar [COMMAND]
```

### Installer Composer en Global

Téléchargez la [dernière version](https://getcomposer.org/download/latest-stable/composer.phar). Vous aurez un fichier `composer.phar`, renommez le en `composer` et déplacez le dans un dossier dans le PATH (sous mac/linux dans `/usr/local/bin/`, sous windows si vous avez suivi le tutoriel [À PRIORI, on va faire du PHP ensemble](https://www.notion.so/PRIORI-on-va-faire-du-PHP-ensemble-0b4c9639ef7044a7a5df557c7821d078?pvs=21), dans `c:/php` )

Vous pourrez ensuite utiliser composer via la commande :

```bash
composer [COMMAND]
```

### Puis installer Symfony-CLI

En suivant le [tutoriel avec Symfony,](https://symfony.com/download) étape 1, installez l’utilitaire symfony-cli.

Cette commande peut aussi lancer composer via :

```bash
symfony composer [COMMAND]
```

---

Maintenant que vous avez installé Composer, on va créer une structure de dossiers adaptée au projet.

```
.
├── public
│   └── index.php
└── src
```

On va laisser le fichier `index.php` vide pour le moment.

La première étape va être d'appeler la commande `composer init` qui va initialiser le projet Composer. Une série de questions seront posées. On peut ignorer chaque question pour le moment et passer à la suite.

```bash
Welcome to the Composer config generator

This command will guide you through creating your composer.json config.

Package name (<vendor>/<name>) [henri/sf-tp2]: **henri/tp2**
Description []: 
Author [decima <h.larget@gmail.com>, n to skip]: **n**
Minimum Stability []: 
Package Type (e.g. library, project, metapackage, composer-plugin) []: 
License []: 

Define your dependencies.

Would you like to define your dependencies (require) interactively [yes]? **no**
Would you like to define your dev dependencies (require-dev) interactively [yes]? **no**
Add PSR-4 autoload mapping? Maps namespace "Henri\Tp2" to the entered relative path. [src/, n to skip]: **n**

{
    "name": "henri/tp2",
    "require": {}
}
Do you confirm generation [yes]? **yes**
```

Le fichier `composer.json` a été créé et contient le contenu suivant :

```json
{
    "name": "henri/tp2",
    "require": {}
}
```

Ce fichier contient toutes les informations du projet : les dépendances **require**, **l'autoload**,…

On va donc commencer par ajouter la totalité des bibliothèques que nous avons besoin pour notre projet, à savoir [`symfony/http-foundation`](https://packagist.org/packages/symfony/http-foundation). Pour cela, il faut juste faire `composer require` suivi du nom du package souhaité.

On va également ajouter une dépendance au package [`symfony/var-dumper`](https://packagist.org/packages/symfony/var-dumper) qui est une dépendance à utiliser **uniquement** en environnement de dev en modifiant la commande précédente et en ajoutant l'argument `require --dev` .

2 valeurs ont été ajoutées au fichier **composer.json** :

```json
"require": {
    "symfony/http-foundation": "^7"
},
"require-dev": {
    "symfony/var-dumper": "^7"
}
```

> Dans le cas où on prendrait le fichier déjà existant, il faut faire un `composer install`.
>

Le composant var-dumper offre deux fonctions pratiques pour le développement :

```php
dump($foo); //affiche le contenu d'une variable

dd($foo); //affiche le contenu d'une variable et arrête l'execution du code
```

La structure du dossier a changé :

```php
.
├── composer.json
├── composer.lock
├── public
│	 └── index.php
└── vendor
    ├── autoload.php
    ├── bin
    ├── composer...
    └── symfony...
```

Le fichier Composer.lock ainsi que le dossier vendor se sont ajoutés. Le Composer.lock est un fichier qui permet de s'assurer que les versions installées sont toujours conservées dans l'état. Le dossier vendor, quant à lui, contient un dossier bin, un fichier autoload.php ainsi que des sous dossiers organisés par sous-dossiers.

Le fichier `autoload.php` est le seul fichier qu'il faudra par la suite inclure en utilisant la constante `__DIR__ . "/path/to/vendor/autoload.php"` dans notre point d'entrée, et s'occupera des différents autoloads. Notre point d'entrée de site se trouve dans le dossier **public**, donc il faudra faire un chemin avec `__DIR__ . "/../vendor/autoload.php"`.

---

Pour continuer dans la configuration de Composer, nous allons mettre en place l'autoload intégré.

Pour cela, on ajoute dans le fichier Composer.json à la suite des `require` une clé `autoload` qui contient :

```json
"autoload": {
    "psr-4": {
        "App\\": "src/"
    }
}
```

Cela signifie qu'à partir de maintenant, le dossier `src/` est le namespace `App\`. pour que les changements soient pris en compte, il faut faire un `composer dump-autoload` qui va régénérer l'autoload.

Maintenant que tout est bon, on va ajouter au fichier `index.php` du dossier public une première ligne de `require` vers le fichier `autoload.php` comme indiqué plus haut.

De cette manière, toutes les classes écrites ensuite seront automatiquement chargées et les dépendances seront accessibles.

## Mon premier Controller

Dans le namespace `App\Controller` créez une classe **`HomeController`**. Cette classe aura une méthode index, et prendra en paramètre un objet de type `Symfony\Component\HttpFoundation\Request`nommé `$request` et renverra un objet `Symfony\Component\HttpFoundation\Response` qui aura pour premier argument lors de l'instanciation une chaîne de caractère `"it works"`.

## La classe App\Kernel

Créez une classe PHP dans le namespace `App` qui va s'appeler `Kernel`, qui aura une méthode publique  `handle(Request $request)`, deux méthodes privées `route(Request $request): Response` et `paramResolver(string $className, string $method, array $container): array`

- Dans le fichier index.php…

  Dans le fichier `index.php` en utilisant les `use` comme vu précédemment créez une nouvelle variable `$request` :

    ```php
    $request = Request::createFromGlobals();
    ```

  instanciez un nouveau Kernel dans la variable $kernel et appelez la méthode `handle` en lui passant le paramètre `$request`.

    ```php
    $kernel = new Kernel();
    $kernel->handle($request);
    ```

- Dans la méthode `paramResolver`...

  Dans la méthode `paramResolver`, ajoutez le code suivant :

    ```php
    $reflexion = new \ReflectionMethod($className, $method);
    $params = $reflexion->getParameters();
    $paramValues = [];
    
    foreach ($params as $param) {
        if ($param->hasType() && isset($container[$param->getType()->getName()])) {
            $paramValues[$param->getPosition()] = $container[$param->getType()->getName()];
        } else {
            $paramValues[$param->getPosition()] = $container[Request::class]->get($param->getName(), null);
        }
    }
    
    return $paramValues;
    ```

- Dans la méthode `route`...

  Ajoutez le code suivant :

    ```php
    $defaultController = HomeController::class;
    
    //we get the route here and clean it
    $path = $request->getPathInfo();
    $path = trim($path, "/");
    
    $className = $defaultController;
    $method = "index";
    if (strlen($path) > 0) {
        // if subroute is not specified, it is merged to /index
        list($controller, $method) = [...explode("/", $path), "index"];
        $className = "App\\Controller\\" . ucfirst($controller) . "Controller";
        if ($className === $defaultController && $method === "index") {
            /** @todo we called index of $defaultController, make a redirection to / here WITHOUT using the header function. */
        }
    }
    
    if (!class_exists($className) || !method_exists($className, $method)) {
        /** @todo return a not found response here (status code 404) */
    }
    
    $resolvedArguments = $this->paramResolver($className, $method, [Request::class => $request]);
    return call_user_func_array([new $className(), $method], $resolvedArguments);
    ```

  Le comportement attendu de la route est le suivant :

  | Route | Méthode de controller appelée |
      | --- | --- |
  | / | HomeController index |
  | /about | AboutController index |
  | /about/contact | AboutController contact |
  | /home/index | => / |
- Et la méthode handle…

    ```php
    $response = $this->route($request);
    $response->send();
    ```


La méthode Handle de notre Kernel va s'occuper de faire la suite des opérations.

**Une fois tous les todos fixés, on va lancer le serveur intégré à PHP pour le développement.**

À la racine du projet, il faut tapper la commande suivante :

```bash
php -S 0.0.0.0:8000 -t public
```

Et aller sur http://localhost:8000/ Si tout se passe bien, le site affiche “it works".

Vous pouvez également tester d’aller sur /home/index. Que se passe-t-il ?

---

## Abstraction du contrôleur

Pour la suite du TP, on va créer une classe abstraite `App\Controller\AbstractController`.

Le code de la classe abstraite est la suivante :

```php
namespace App\Controller;
use \Symfony\Component\HttpFoundation\Response;

abstract class AbstractController
{
    public function render($templateName, $data = [])
    {
        ob_start();
        foreach ($data as $k => $v) $$k = $v; **// worst line ever (don't do that)**
        include(__DIR__ . "/../../templates/layout.php");
        $content = ob_get_contents();
        ob_end_clean();
        return new Response($content);
    }
}
```

Cette classe abstraite sera la base de nos controlleurs.

On va également créer un dossier templates à la racine de notre projet et lui donner cet aspect :

```
.
├── templates
│   ├── home
│   │   └── index.php   
│   └── layout.php
├── ...
└── ...
```

Dans le fichier layout.php, on va mettre le code suivant :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    <title>Mon super Site</title>
</head>
<body class="flex flex-col min-h-screen">
<div>
    <nav class="bg-gray-800 shadow">
        <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
                <div class="w-full justify-between flex items-center">
                    <a class="flex-shrink-0 text-white" href="/">My App</a>
                    <div class="md:block">
                            <a class="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">Home</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>

<main class="flex-grow bg-gray-100 flex flex-col" role="main">
    <div class="flex-grow bg-white 	 w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <?php include $templateName . ".php"; ?>
        </div>
    </div>
</main>

<footer class="bg-gray-800 w-full py-8">
    <div class="max-w-screen-xl mx-auto px-4">
        <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li class="my-2">
                <a class="text-gray-400 hover:text-gray-100 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                   href="#">
                    &copy prénom NOM - 2025
                </a>
            </li>
        </ul>
    </div>
</footer>

</body>
</html>
```

Dans le fichier `templates/home/index.php` on va ajouter :

```php
<h1>
    Hello <?php echo $name; ?>
</h1>
```

La classe `App\Controller\HomeController` doit étendre la classe `App\Controller\AbstractController`, et dans la méthode `index`, on met le code suivant :

```php
return $this->render(
    "home/index", 
		[
        "name"=>$request->query->get('name')
    ]
);
```

De cette manière, en allant sur [localhost:8000?name=Bob](http://localhost:8000?name=Bob) vous devriez voir "Hello Bob".

## Aller plus loin

> Votre objectif maintenant est de rajouter un formulaire sur la page qui pointe vers la même page (`<form method="POST" action="#">`) avec un champ name vide, et de récupérer la variable passée en POST dans la requête pour l'afficher sur la page.
>