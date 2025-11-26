---
title: PHP
level: 1
type: 1_courses
description: Introduction au langage PHP, ses caractéristiques et son utilisation dans le développement web.
cover: ../images/cover-1.png
hideTitle: true
hideCoverOnCourse: true
---

# Qui parmi vous fait du PHP ?

![](../images/php-headache.png)

---

## PHP c'est quoi ?

- Langage de scripting
- Langage Backend pour le web

C'est un langage **interprété**



---

## Est-ce que PHP est mort ?

---

![reddit 2025](../images/php-reddit-2025.png)

---

![reddit 2024](../images/php-reddit-2024.png)

---

![reddit 2023](../images/php-reddit-2023.png)

---

![](../images/php-dead-in-2025.png)


---

### Qui s’en sert ?

<reveal>

- Blablacar
- Etsy
- Dailymotion
- ...

### vous en connaissez d'autres ?

- Wikipedia - 600M de pages
- Baidu - 704M utilisateurs (facebook chinois)
- Facebook - 3.07B utilisateurs
- Aylo - 33B de visites annuelles sur une seule de leur plateforme.
- ![](../images/aylo-what-i-mean.png)

</reveal>

---

![](../images/php-stats-usage.png)

---

![](../images/php-is-not-dead.png)


---

### Historique

<reveal>

- PHP 👶 - 1994
- PHP 3 🐘 - 1998
- PHP 4 💩💩 - 2000
- PHP 5 💩 - 2004
- ~~PHP 6~~ ⚰️
- PHP 5.6 🌱 - 2014
- PHP 7 🌳 - 2015
- PHP 8 🚀- Novembre 2020
- PHP 8.5 - Novembre 2025 **← you are here**

</reveal>

---

### Pourquoi cette séance ?

- Remettre tout le monde à niveau
- Pour vous mettre à jour, avant de rentrer dans le vif du sujet

---

## Outils pour ce cours

- PHP 8.4+ (avec SQLite3)
- ...
- et c'est tout !

---

### Usage

En ligne de commande :

```bash
php -v
```

```bash
PHP 8.4.13 (cli) (built: Sep 23 2025 14:14:32) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.4.13, Copyright (c) Zend Technologies
    with Zend OPcache v8.4.13, Copyright (c), by Zend Technologies
```

Démarrer un serveur local qui pointe sur un dossier public

```bash
php -S 0.0.0.0:8000 -t public
```

```bash
[Wed Nov 26 18:12:04 2025] PHP 8.4.13 Development Server (http://0.0.0.0:8000) started
```

Le serveur sera disponible sur [localhost:8000](http://localhost:8000/)

---

## Syntaxe de base

```php
<?php
/** Syntaxe de base **/
$myVar = "Hello";
$myInt = 2;
echo $myVar . " " . $myInt;
$myInt = $myInt * 2;
```

```php
function addition(int $a, int $b) int{
    return $a + $b;
}
echo addition(2,3);

$addition2 = function (int $a, int $b): int {
    return $a + $b;
};
echo $addition2(2, 3);

$addition3 = fn(int $a, int $b): int => $a + $b;
echo $addition3(3, 6);
```

---

```php
include_once("page3.php"); 
require_once("page4.php");
include("page1.php");
require("page2.php");
```

<reveal>

- `include_once` : inclut le fichier une seule fois, ne plante pas si le fichier n'existe pas. **NON**
- `require_once` : inclut le fichier une seule fois, si le fichier n'existe pas, plante l'exécution. **NON**
- `include` : inclut le fichier, ne plante pas si le fichier n'existe pas. **Oui, mais...**
- `require` : inclut le fichier, si le fichier n'existe pas, plante l'exécution. **OUI**

</reveal>

---

## Syntaxe Objet

PHP est un langage Orienté Objet

```php
class Foo {
}

class Bar {

	private Foo $foo;
	
	public function __construct(Foo $foo) { 
		$this->foo = $foo; 
	}
	
	public function getFoo():Foo { 
		return $this->foo; 
	}
}
```

---

### Typage PHP

<reveal>

- Oui ça existe !
- Oui, c'est bien !
- Non, ce n'est pas obligatoire !
- Mais c'est quand même mieux !

</reveal>

---

### Ce qui peut être typé

<reveal>

- Les arguments d’une fonction/méthode : **7.0**
- Les valeurs de retour de fonction **7.0**
- Les propriétés d’un objet : **7.4**

</reveal>

---

### Namespaces

Les Namespaces PHP sont arrivés en PHP version **>= 5.3.0**. (juin 2009)
En comparaison avec le Java, un Namespace est un **Package JAVA**.

<columns>
<column>

**java**

```java
package fr.larget;
import Some.import.*;

class Kernel{
    public Kernel(){          
     ....
    }
}
```

</column>
<column>

**PHP**

```php
namespace Fr\Larget;
use Some\Import;

class Kernel {
    public function __construct() {
        ....
    }
}

```

</column>
</columns>

---

On peut également mettre plusieurs namespaces dans un seul fichier au besoin 😱 :

```php
<?php
namespace App\Model {
  class User{  }
  class Group{  }
}

namespace App\Controller{
  class MainController{  }
}
```

> [!CAUTION] 😱 **Faites pas ça.**

---

<columns>
<column>

On peut aussi ajouter des fonctions dans le namespace directement :

```php
namespace App {
	functionfoo() {
		echo 42;
  }
}
```

</column>
<column>

Et on importe la fonction avec le mot-clé **`use function`**

```php
use function App\foo;
foo();
```

</column>
</columns>


<columns>
<column>

Par exemple :

```php
namespace App\bar {
  class A{}
  class B{}
  function c(){ echo "c\n"; }
}
```

</column>
<column>

```php
namespace App\foo{
  use function App\bar\c;   
  use App\bar as baz;
  use App\bar\A;

  echo baz\A::class . "\n";
  echo A::class . "\n";
  echo bar\B::class . "\n";
  echo \App\bar\B::class . "\n";
  \App\bar\c();
  baz\c();
  c();
}
```

</column>
</columns>

---

## ATTENTION

> [!CAUTION] Mais les namespaces **n'ont pas les mêmes propriétés** que Java - Le code **ne s'importe pas** tout seul.

Il existe un groupe de développeurs nommé [PHP Framework Interop Group (PHP-FIG)](https://www.php-fig.org/) qui a écrit
des conventions de code nommées [PSR - PHP Standards Recommendations](https://www.php-fig.org/psr/).

La plus importante de ces recommandations est la recommandation PSR-4 qui préconise de nommer ses **namespaces**
comme **ses dossiers** pour en faciliter l'import, comme en java.

Un exemple d'autoload respectant le principe de base du PSR-4.

```php
spl_autoload_register(function ($class) {
  $prefix = 'App\\';
  $baseDir =__DIR__ . '/src/';
  $len = strlen($prefix);
	if (strncmp($prefix, $class, $len) === 0) {
    $relativeClass = substr($class, $len);
    $file = $baseDir . str_replace('\\', '/', $relativeClass).".php";
		if (file_exists($file)) {require $file; }
	}
});

```

Avec cet autoloader, on retrouve les fichiers suivants :

```php
  \App\Controller\MainController => src/Controller/MainController.php
  \App\Router => src/Router.php
  \Foo\ => ?
```

---

## Les nouveautés PHP 8.x

---

### Union Types (8.0) / Intersection Types (8.1)
```php
function foo(int|float $number): int|float {
    return $number * 2;
}
```

```php
function bar(A&B $obj): C&D {
    // ...
}

```


### Named Arguments (8.0)
```php
function foo(int $a, int $b, int $c) {
    return $a + $b + $c;
}
foo(c: 3, a: 1, b: 2);
```

### Property Promotion Constructor (8.0)

<columns>
<column>

**PHP 7.4**

```php
class Point {
    private int $x;
    private int $y;
    public function __construct(int $x, int $y) {
        $this->x = $x;
        $this->y = $y;
    }
}
$point = new Point(10, 20);
```

</column>
<column>

**PHP 8.0**

```php
class Point {
    public function __construct(public int $x, public int $y) {}
}

$point = new Point(10, 20);
```

</column>
</columns>

---
### Match Expression (8.0)

```php
$result = match($input) {
    1 => "one",
    2, 3 => "two or three",
    default => "other",
};
```

### Enums (8.1)

```php
enum Suit:string {
    case Clubs = '♣';
    case Diamonds = '♦';
    case Hearts = '♥';
    case Spades = '♠';
}
$suit = Suit::Hearts;
echo $suit->value; // '♥'
```

---

### Asymmetric Visibility (8.4)

```php
<?php
class A
{
    public function __construct(
        private(set) string $name,
    )
    {
    }
}
```

$a = new A("Henri");
echo $a->name; // Henri

$a->name = "Henri2"; // Fatal error...

---

### Hooks de propriétés (8.4)

```php
<?php

class User
{
    public string $name {
        get => ucfirst($this->name);
        set(string $value) => $this->name = trim($value);
    }
}

$a = new User();
$a->name = "     henri              ";
echo "je m'appelle $a->name";  // je m'appelle Henri

```

