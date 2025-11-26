---
title: Composer
level: 2
type: 1_courses
description: C'est quoi Composer et comment l'utiliser pour gérer les dépendances dans vos projets PHP.
cover: ../images/cover-2.png
hideTitle: true
hideCoverOnCourse: true
---

## Composer c'est quoi ?

<columns>
<column>

![Composer Logo](../images/composer.png)

</column>
<column flex-2>


Composer est un gestionnaire de packets PHP créé en 2012. Venant remplacer directement 🕸️PEAR, Composer est aujourd'hui
le plus utilisé.

On peut retrouver la liste des packets sur [Packagist.org](https://packagist.org/)

</column>

</columns>

<columns>
<column flex-2>

Un paquet, c'est une ~~librairie~~ **bibliothèque** de code écrite par des développeurs pour répondre à un besoin, faire
gagner du temps, apporter quelque chose à la communauté.

Par ailleurs, Composer intègre des fonctions d'**`autoload`** qui ***respectent les standards PSR-4***.

On verra leur utilisation dans la suite du cours.

</column>
<column>

![](../images/composer-reinvent-wheel.png)

</column>

</columns>

---

## Installer composer

<columns>
<column style="border-right: 1px solid #ccc; padding-right: 20px;">

Composer peut être installé dans un dossier local en suivant les instructions suivantes :

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
mkdir bin
php composer-setup.php  --install-dir=bin --filename=composer
chmod a+x bin/composer
rm composer-setup.php
```

</column>
<column>

Toutes les commandes Composer peuvent ainsi être saisie en tapant :

```
php bin/composer COMMAND
```

Par exemple :

```
php bin/composer about
```

```
   ______
  / ____/___  ____ ___  ____  ____  ________  _____
 / /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/
/ /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ /
\____/\____/_/ /_/ /_/ .___/\____/____/\___/_/
                    /_/
Composer version 2.8.12 2025-09-19 13:41:59
```

</column>
</columns>

---

## Usage

Quand on récupère un projet, si le projet à un fichier `composer.json`, la première étape consiste à faire un `composer install`

Pour ajouter une dépendance, il faut utiliser la commande `composer require [DEP]`

Pour supprimer une dépendance, il faut utiliser la commande `composer remove [DEP]`

Si vous souhaitez mettre à jour une dépendance, il faut utiliser la commande `composer update [DEP]`

Pour mettre à jour toutes les dépendances, il faut utiliser la commande `composer update`

---

## Quelle est la différence entre un composer.json et un composer.lock ?

Composer.json contient la version idéale qu’on veut

```json
{
"symfony/asset": "^5.4",
"symfony/console": "^5.4",
"symfony/dotenv": "^5.4",
"symfony/expression-language": "^5.4",
"symfony/flex": "^2.2",
"symfony/form": "^5.4"
}
```

Composer.lock contient la version réellement installée

```json
{
"name": "symfony/console",
"version": "v5.4.19",
"source": {
    "type": "git",
    "url": "https://github.com/symfony/console.git",
    "reference": "dccb8d251a9017d5994c988b034d3e18aaabf740"
}
}
```

---

## Autoload
Composer permet de charger automatiquement les classes PHP en respectant les standards PSR-4.
Pour cela, il faut ajouter dans le composer.json la section suivante :
```json
"autoload": {
    "psr-4": {
        "MonNamespace\\": "src/"
    }
}
```

Puis, dans le code PHP, il faut inclure le fichier `vendor/autoload.php` généré par Composer :
```php
require 'vendor/autoload.php';
use MonNamespace\MaClasse;
```
Après avoir modifié le composer.json, il faut exécuter la commande `composer dump-autoload` pour générer le fichier autoload.php.

---

## Ressources
- [Documentation officielle de Composer](https://getcomposer.org/doc/)
- [Packagist.org - Le dépôt officiel des paquets Composer](https://packagist.org/)
- [PSR-4 - Autoloading Standard](https://www.php-fig.org/psr/psr-4/)
- [Tutoriel Composer par DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-ubuntu-20-04-fr)
