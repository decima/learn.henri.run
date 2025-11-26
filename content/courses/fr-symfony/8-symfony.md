---
title: Symfony
level: 8
type: 1_courses
description: Introduction au framework Symfony, ses composants et son écosystème pour le développement d'applications web en PHP.
cover: ../images/cover-8.png
hideTitle: true
hideCoverOnCourse: true
---

Symfony a été créé en 2005 par Fabien Potencier pour l'entreprise SensioLabs.

Symfony, c'est une suite de composants, et un des plus importants est le composant Framework, qui est la glue des autres
composants.

À la base, le framework s'appellait **Sensio Framework**, et quand il a été mis Open-Source, il a gardé ses initiales 
**SF**

## Qui l'utilise ?

<reveal>

- BlaBlaCar
- Dailymotion
- Spotify
- National Geographic
- La maison blanche
- Yahoo
- ...
- Pornhub, YouPorn, RedTube, Brazzers, ....

</reveal>

---

## Symfony c'est...

<reveal>

- Un framework PHP ?
    - ✅
- Un framework HTTP ?
    - ✅
- Un franework request/response ?
    - ✅
- Un framework MVC ?
    - ❌

</reveal>

---

![](../images/archi-mvc.png)

> Le protocole HTTP est un protocole de communication entre un client et un serveur. C'est un protocole de Request/Response.


> Un Routeur intercepte la Requête HTTP, l'envoie vers le Controller qui correspond. Celui-ci ira communiquer avec le Modèle de données et génèrera la Vue qu'il renverra en Réponse HTTP.

---

Dans le cas de Symfony, il n'existe pas de couche Modèle créée par le framework, celui-ci n'est donc pas MVC.

![](../images/archi-sf.png)

> La couche modèle est gérée par Doctrine. Symfony est beaucoup plus généraliste.
>

---

## Pourquoi le cours a été découpé comme ça ?

<reveal>

- TP1 : todolist
  - Remise à niveau de PHP
  - Comprendre l'intérêt d'un code organisé
  - Comprendre que ce qui est sale, c’est les développeurs, pas le langage

- TP2 : Framework Maison
  - Découverte des composants HTTP Foundation, Doctrine et Twig
  - Comprendre que les composants sont indépendants
  - Comprendre pourquoi tout le monde les utilisent
  - Comprendre le concept de briques

</reveal>
---

<reveal>

- TP3 : Utilisation du framework Symfony
  - Manipuler le framework
  - Continuer la découverte des composants

</reveal>