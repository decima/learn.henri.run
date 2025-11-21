---
title: Projet Netflix viewer
type: 3_evaluation
level: 1
---

> [!CAUTION] lire attentivement **TOUT** le sujet avant de commencer le projet.

-------------------------------------------------
Modalités Générales
-------------------------------------------------

- Durée : 5 semaines (rendu le 23 novembre 2025 à 23h59).
- Par groupe de 3 à 4 personnes
- Langages libres (JavaScript/Node.js, Python, etc.)
- SGBD imposé (PostgreSQL, MongoDB, Neo4j, Elasticsearch) tiré au sort.
- Rendu via un dépôt Git, pensez à inviter `decima` sur le projet.

Si besoin, je vous laisse me contacter via les [règles pour me contacter](/about/contact)

-------------------------------------------------
Objectif du Projet
-------------------------------------------------

L'objectif de ce projet est de réaliser une chaîne complète de traitement de la donnée.
À partir d'un export d'archive de données Netflix, vous devrez :

- Choisir un système de gestion de base de données (SGBD) parmi une liste imposée.
- Concevoir un schéma de données et y insérer les données de l'archive.
- Développer une application web permettant d'explorer et de visualiser ces données de manière pertinente.

Ce projet vous amènera à développer des compétences en modélisation de données, en manipulation de SGBD variés (SQL et
NoSQL), en développement backend (API) et frontend.

-------------------------------------------------
Contexte et Données
-------------------------------------------------

Chaque groupe peut récupérer un export d'archive de données de visionnage Netflix.

[Télécharger l'archive](https://github.com/decima/learn.henri.run/raw/refs/heads/main/content/resources/db/netflix-report.zip)

Il est également possible d'utiliser une archive personnelle si vous avez un compte Netflix en récupérant vos propres
données via [votre compte](https://www.netflix.com/account/getmyinfo).
> [!WARNING] Notez que le temps de traitement de Netflix peut être long (plusieurs jours/semaines).

Ces données brutes contiennent l'historique des films et séries vus par différents profils, les dates de visionnage, les
appareils utilisés, etc.

Le format des données n'étant pas parfait, une étape de nettoyage et de transformation sera **indispensable** pour les
rendre exploitables.

-------------------------------------------------
Description des Tâches
-------------------------------------------------

### Étape 1 : Choix et Prise en Main de la Base de Données

Une base de données vous sera attribuée aléatoirement parmi les quatre suivantes :

- PostgreSQL (Relationnel)
- MongoDB (Document)
- Neo4j (Graphe)
- Elasticsearch (Moteur de recherche / Document)

Vous devrez vous familiariser avec le SGBD qui vous a été assigné, comprendre ses concepts clés et sa manière de
modéliser et requêter la donnée.

### Étape 2 : Script d'Ingestion et Nettoyage

Vous devrez développer un script (en JavaScript/Node.js, Python, ou autre langage de votre choix) qui aura pour mission
de :

- Lire et analyser les fichiers de l'archive Netflix.
- Nettoyer les données : suppression des doublons, gestion des valeurs manquantes, **standardisation des titres**, etc.
- Transformer les données pour qu'elles correspondent au modèle que vous avez conçu pour votre SGBD.
- **BONUS:** consolider les données en enrichissant les informations des films et séries via une API externe comme :
    - [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api),
    - [the TVDB](https://thetvdb.com/api-information)
    - [IMDb API](https://imdb-api.com/)
    - [Open Movie Database](https://www.omdbapi.com/)
    - [Trakt API](https://trakt.docs.apiary.io/)
- Insérer les données propres dans votre base de données.

### Étape 3 : Application Web de Visualisation

Vous développerez une application web qui interrogera votre base de données via une API que vous créerez.
L'application devra comporter les pages suivantes :

#### a) Page "Catalogue"

Cette page listera tous les films et séries présents dans la base de données. Elle devra proposer des fonctionnalités de
filtrage et de recherche, par exemple :

- Filtrer par type (film / série).
- Filtrer par année de visionnage.
- Une barre de recherche textuelle sur les titres.
- (Bonus) Filtrer par genre (si vous parvenez à enrichir la donnée via une API externe comme TMDB).

#### b) Page "Profil"

Cette page affichera les statistiques d'un profil Netflix spécifique. En sélectionnant un profil, on devra voir :

- Son Profil
- Le nombre total de films et séries vus.
- Le temps total de visionnage cumulé.
- Le top 5 de ses films les plus vus.
- Le top 5 de ses séries les plus vues (en se basant sur le nombre d'épisodes vus).
- Les utilisateurs ayant des goûts similaires (en fonction des films et séries vus).
- Un graphique montrant son activité de visionnage au fil du temps (par mois/année).
- **Bonus** Un graphique montrant les heures de la journée où le profil regarde le plus de contenu.

Si vous avez enrichi les données avec des genres, vous pouvez également afficher :

- **Bonus** Un graphique circulaire montrant la répartition des genres regardés.
- **Bonus** Les personnes ayant les mêmes goûts (en fonction des genres regardés).

<columns>
<column>

#### c) Page "Détail d'une Série"

En cliquant sur une série depuis le catalogue, cette page devra afficher :

- Le titre (et une description) de la série.
- La liste des saisons et des épisodes vus.
- La liste des profils ayant regardé cette série.

</column>
<column>

#### d) Page "Détail d'un Film"

En cliquant sur un film depuis le catalogue, cette page devra afficher :

- Le titre (et la durée et l'année de sortie) du film
- La liste des profils ayant regardé ce film

</column>
</columns>

-------------------------------------------------
Rendu
-------------------------------------------------

Vous devrez fournir l'URL d'un dépôt Github contenant :

L'intégralité du code source (script d'ingestion, backend, frontend).
Un fichier README.md complet expliquant :

- La structure de votre projet.
- Comment installer les dépendances et lancer le projet (script d'ingestion et application web).
- Une brève description de votre modèle de données et des choix que vous avez faits.
- Un Retour d'expérience sur le projet : ce qui a bien fonctionné, les difficultés rencontrées, ce que vous auriez fait
  différemment.

-------------------------------------------------
Critères d'Évaluation
-------------------------------------------------

- Qualité du script d'ingestion : Efficacité, robustesse et pertinence du nettoyage. /5
- Modélisation des données : Pertinence du schéma de données choisi par rapport au SGBD imposé. /5
- Fonctionnalités de l'application : Toutes les pages et fonctionnalités demandées sont présentes et fonctionnelles. /4
- Requêtage : Les requêtes faites à la base de données sont pertinentes et optimisées. /4
- Qualité du code : Clarté, organisation, commentaires, respect des bonnes pratiques. /1
- Qualité du README.md : Clarté des instructions pour lancer et comprendre votre projet. /1
- 
- Originalité et Bonus : Toute fonctionnalité ou amélioration supplémentaire sera prise en compte.
