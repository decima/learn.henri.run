---
title: Twig
level: 7
type: 1_courses
description: Introduction à Twig, le moteur de templates utilisé dans Symfony pour générer des vues HTML.
cover: ../images/cover-7.png
hideTitle: true
hideCoverOnCourse: true
---

## Templating

Un Template est un fichier texte qui permet de générer n'importe quel format de fichier texte (HTML, XML, CSV,
LaTeX...).

**Quel est le language de templating le plus utilisé selon vous ?**

<reveal>

- Le PHP est le format le plus populaire pour faire du templating :
```html
<!doctype html>
<html>
    <head>
        <title><?= $title ?></title>
    </head>
    <body>
        <h1>List Of Users</h1>
        <table>
            <?php foreach($users as $user): ?>
                <tr>
                    <td><?= $user->getId();?></td>
                    <td><?= $user->getName();?></td>
                </tr>
            <?php endforeach;?>
    </body>
</html>
```

</reveal>

---

## Twig

Twig est un moteur de templating moderne pour PHP développé par Symfony.

- Rapide avec son système de cache
- Sécurisé avec son contenu encodé
- Moderne avec sa syntaxe courante, concise et flexible

Voici le même code que vu précédemment avec twig :

```php
<!doctype html>
<html>
    <head>
        <title>{{ title }}</title>
    </head>
    <body>
        <h1>List Of Users</h1>
        <table>
            {% for user in users %}
                <tr>
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                </tr>
            {% endfor %}
    </body>
</html>
```

---

**La différence, elle se situe ici :**
```php
<?php echo htmlspecialchars($name, ENT_QUOTES,'UTF-8'); ?>
```

```twig
{{ name }}
```

---

## Syntaxe de base

```bash
{# ... ici un commentaire ...... #}
{% ... faire quelquechose ...... %}
{{ ... afficher quelquechose ... }}
```

---

### Filtres

Les filtres appliquent des transformations aux variables, voici des exemples de d'usage :

```bash
{{ post.createdAt|date('d/m/y') }}
{{ post.title|lower }}
{{ post.title|upper }}
{{ post.title|capitalize }}
{{ post.title|title }}
{{ post.tags|sort|join(', ') }}
{{ post.author|default('anon.') }}
```

### Fonctions

Les fonctions Twig peuvent générer ou extraire des valeurs ou des listes de valeurs :

```bash
{{ min(1, 3, 2) }}
{{ random(['apple', 'orange', 'citrus']) }}
```

---

#### Contrôle de Structures

Les structures de contrôle se limitent à 4 mots clés :

`if`, `else`, `elseif`, `for`

Exemple d'usage :

```bash
{% if product.stock > 10 %}
	available
{% elseif product.stock > 0 %}
	only {{ product.stock }} left!
{% else %}
	Sold-out!
{% endif %}
```

Boucles avec la syntaxe `for else`:

```bash
{% for post in posts if post.active %}
    <h2>{{ post.title }}</h2>
    {{ post.body }}
{% else %}
    No published posts yet.
{% endfor %}
```

---

### Opérateurs de comparaison

```bash
== != < > <= >=
starts with
ends with
matches
not
```

[Twig for Template Designers](https://twig.symfony.com/doc/3.x/templates.html#expressions)

### Inclusion

L'inclusion permet d'intégrer une page dans une autre de la manière suivante :

`{{ include("menu.html.twig") }}`

---

### Héritage

L'une des fonctionnalités les plus performante de Twig est l'héritage de templates. Cela permet de réaliser une base "skeleton" qui contiendra tous les éléments de votre site et définir des blocks que les templates enfants pour venir modifier :

Voici un exemple squelette `base.html.twig` de notre site :

```html
<!DOCTYPE html>
<html>
    <head>
        {% block head %}
            <link rel="stylesheet" href="style.css" />
            <title>{% block title %}{% endblock %} - My Webpage</title>
        {% endblock %}
    </head>
    <body>
        <div id="content">
						{% block content %}
						{% endblock %}
				</div>
        <div id="footer">
            {% block footer %}
                &copy; Copyright 2011 by <a href="http://domain.invalid/">you</a>.
            {% endblock %}
        </div>
    </body>
</html>
```

---

De cette manière, on peut étendre le fichier de base de la manière suivante :

```html
{% extends "base.html" %}

{% block head %}
    {{ parent() }} {# parent va reprendre le contenu du bloc du parent pour l'ajouter à l'endroit voulu dans le bloc enfant #}
    <style type="text/css">
        .important { color: #336699; }
    </style>
{% endblock %}

{% block content %}
    <h1>Index</h1>
    <p class="important">
        Welcome to my awesome homepage.
    </p>
{% endblock %}

{% block title %}Index{% endblock %}

```

---

### Ressources

- [Documentation Officielle de Twig](https://twig.symfony.com/doc/3.x/)
- [Getting Started with Twig](https://twig.symfony.com/doc/3.x/intro.html)
- [Twig Cheatsheet](https://twig.symfony.com/doc/3.x/templates.html)
- [Twig Playground](https://twigfiddle.com/)
- [Twig in Symfony](https://symfony.com/doc/current/templates.html)
