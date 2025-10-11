---
title: A priori on va faire du PHP ensemble...
tags: [ php, setup,dev ]
author: Decima
date: 2025-05-30
---

![](/guide/php-reaction.gif)

Si vous lisez ces lignes, c’est que vous avez la (mal)chance d’avoir un cours avec moi, et on va avoir besoin de PHP.
Pour gagner du temps, si vous utilisez vos machines, **veillez vous assurer d’avoir tous les outils à votre disposition.
**
Pour les besoins du cours, je souhaite vous faire travailler sous **PHP 8.4**, dernière version de PHP en date, et *
*rien d’autre**.

> [!IMPORTANT]
> En votre qualité d’étudiant, vous pouvez télécharger et installer **phpstorm** l’IDE JetBrains **GRATUITEMENT**.

## Linux 🐧

### Ubuntu (avec APT)

Il faut d'abord ajouter le [PPA PHP de Ondrej Sury](https://deb.sury.org/), le PPA le plus maintenu à jour avec PHP.

```shell
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update

```

Une fois les bibliothèques mises à jour, il ne reste plus qu'à installer php :

```
sudo apt-get install php8.4-common php8.4-cli
```

### Autre ?

N’hésitez pas à me contacter via discord ou via le menu de {{<page "contact">}}

## MacOS 🍏🍎

Le plus simple pour installer PHP 8 sur Mac OSX est d'installer d'abord Homebrew.
Une fois installé, lancez la commande dans le terminal :

```shell
brew install php
```

## Windows 🤢

Pas de chance pour vous mais on va quand-même s’en sortir 💪.

> [!CAUTION] NOTA BENE
> On n'a pas besoin de Wamp/xampp/autre bouses windows.

### Chocolatey 🍫

Une solution simple reste à utiliser [Chocolatey](https://chocolatey.org/)
Installez Chocolatey puis lancez la commande d'installation du
packet [PHP](https://community.chocolatey.org/packages/php) suivante dans l'invite de commande:

```shell
choco install php
```

### Manuellement 🔧

Pour faciliter l’usage de windows, je vous recommande
d’installer [gitforwindows avec git bash](https://gitforwindows.org/)

[Git for Windows](https://gitforwindows.org/)

Ce programme vous permet d’avoir un terminal proche des autres systèmes.

----------------------

**Une fois cela fait, rendez vous sur**

[PHP For Windows: Binaries and sources Releases](https://windows.php.net/download/)

et téléchargez la dernière version de PHP 8.4 (*VS17 x64 Non Thread Safe (2025-May-06 14:19:42)*), en version **NON
THREAD SAFE.**

Dé-archivez l’archive, et déplacez le dossier à la racine de `C:/` et nommez le `php`.

Lancez Gitbash et tapez la commande suivante :

```bash
echo 'PATH=/c/php:$PATH' >> ~/.bashrc
```

Relancez le terminal, et normalement vous devriez avoir PHP.

## Docker 🐳

Vous pouvez utiliser docker si vous le souhaitez.
Pour cela, il faudra récupérer l’image docker de php :

```shell
docker pull php:8-4
```

À partir de là, je recommande de définir un alias dans votre invite de commande/terminal vers cette commande qui vient
remplacer le classique php

```shell
docker run -v $(pwd):/app -p 8000:8000 php:8.4 php
```

### Vérifier sa configuration

Une fois installé, pour tester, vous pouvez la lancer la commande :

```shell
php -v
```

Si ce message s’affiche, c’est que tout est bon :

```
PHP 8.4.5 (cli) (built: Mar 12 2025 01:55:56) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.4.5, Copyright (c) Zend Technologies
    with Zend OPcache v8.4.5, Copyright (c), by Zend Technologies
```

Pour vérifier que tout est ok :

```shell
php -m
```

```shell
...
pdo_sqlite
...
sqlite3
...
```

Sinon, contactez-moi via les [règles pour me contacter](/about/contact)