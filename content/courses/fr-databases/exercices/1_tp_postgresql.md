---
title: TP - PostgreSQL
type: 2_exercise
level: 1
---

## Source de données

Un projet Git a été mis à votre disposition pour répondre aux différentes questions, mais n'est absolument pas
nécessaire pour ce TP.

https://github.com/school-of-decima/tp-pgsql-js-skeleton

Base de donnée : henri.run:5432
Pour vous connecter à l'interface graphique : https://adminer.henri.run/

La chaine de connexion à la bdd est la suivante :

`PG_URL=postgresql://students:*********@henri.run:5432/NOM_DE_LA_BDD`

---

> [!CAUTION] Pour chaque question, il est demandé de fournir la commande SQL utilisée pour répondre à la question.

## Exercice 1 - Création de la base de données

1. Créez une base de données PostgreSQL nommée `votrenom` (remplacez `votrenom` par votre nom).
2. Créez une table `students` avec les colonnes suivantes :
    - `id` : entier, clé primaire, auto-incrémentée
    - `name` : texte, non nul
    - `age` : entier
    - `email` : texte, unique
3. Insérez les données suivantes dans la table `students` :
    - Alice, 23 ans, alice@example.com
    - Bob, 30 ans, bob@example.com
    - Henri, 33 ans, henri@example.com
4. Affichez toutes les données de la table `students`.
5. Mettez à jour l'âge de Bob à 31 ans.
6. Supprimez l'étudiant Alice de la table.
7. Ajoutez une colonne `gender` (texte) à la table `students`.
8. Affichez les données de la table `students` triées par âge décroissant
9. Comptez le nombre d'étudiants dans la table `students`.
10. Trouvez l'étudiant avec l'âge maximum.
11. Trouvez les étudiants dont le nom commence par 'H'.
12. Supprimez la colonne `email` de la table `students`.
13. Supprimez la table `students`.
14. Supprimez la base de données `votrenom`.

---

## Exercice 2 - Agence de voyages galactique

La base de donnée à utiliser s’appelle `space_travel`.

1. Lister toutes les planètes.
2. Combien y-a-til de planètes en base ?
3. Je recherche pour une destination touristique : Une planète composée d'au minimum 70% d'eau "liquide".
4. Je recherche pour une destination touristique : Une planète où le jour dure le plus longtemps
5. Je recherche la planète d'où est originaire `Anakin Skywalker`
6. Quelle est la répartition du nombre de personnes par couleurs d'yeux ?
7. En vous basant sur cette repartition, de quelles planètes sont originaires les gens aux yeux bleus ?
8. Combien y a-t-il de combinaisons possibles de CHEVEUX/PEAU/YEUX de couleurs différente ?
9. A quel age Shmi Skywalker a eu son fils ?

## Exercice 3 - IMDB

Utilisez la base de données IMDB fournie pour répondre aux questions suivantes :

1. Faire un schema de la structure de la base de données.
2. Combien y’a t-il de film dans la base ?
3. Combien y’a t-il de personnes décédées dans la base ?
4. Combien de personnes sont décédées entre 2020 et 2021 ?
5. Combien de personnes ont plus de 100 ans ?
6. Quel âge a la personne la plus âgée ?
7. Trouver toutes les personnes qui ont comme prénom `Henri` ?
8. Combien y’a t-il de personnes qui ont un nom de famille qui est `Larget` ?
9. Combien y’a t-il de films par genre ?
10. Quelle est la personne la plus âgée encore vivante à ce jour ?
11. Combien y’a t-il d'acteurs en base (personne qui a déjà eu un rôle d'acteur dans un film) ?
12. Dans combien de films pour Adultes `Rocco Siffredi` a-t-il joué ?
13. Et avec combien d'actrices ?
14. Combien d'acteurs/actrices ont été leurs propres réalisateurs ?