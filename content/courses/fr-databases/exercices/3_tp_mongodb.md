---
title: TP - MongoDB
type: 2_exercise
level: 3
---

## Ressources

Un project a été mis à disposition pour votre usage afin de réaliser les différents exercices https://github.com/henri-corp/tp-mongodb-js-skeleton

La bibliothèque MongoDB utilisée est la bibliothèque officielle [mongoDB](https://docs.mongodb.com/drivers/node/current/usage-examples/).

Je recommande également l'usage de la bibliothèque [csvtojson](https://github.com/Keyang/node-csvtojson) pour lire des csv et [dayjs](https://day.js.org/) pour la conversion de chaines en dates.

Base de donnée à utiliser : henri.run:27017

Panneau d’admin : https://compass.henri.run

---

**Créer une base de donnée nommée PRENOM_tpmongo**

## Exercice 1

[solarsystem.csv](/resources/db/solarsystem.csv)

En partant du fichier `solarsystem.csv` que vous ajouterez dans le dossier exercices, parcourir les différentes données, les convertir au bon format (`parseFloat` pour les nombres, `dayjs` pour les dates et des conversions booléennes) avant de les insérer dans une collection nommée "solarsystem".

## Exercice 2

En partant de la collection solarsystem, effectuer les recherches suivantes :

1. Listez toutes les planètes qui font partie du système solaire.
2. Trouver la Terre
3. Combien de satellites a Saturne ?
4. Compter le nombre de satellites de la terre
5. Quel est le rayon de la terre ?
6. Combien d'astres sont plus grands que la terre ?
7. Combien d'astres ont été découvert entre le 1er janvier 2000 et le 31 décembre 2004?

## Exercice 3

[steam.json](https://github.com/leinstay/steamdb/blob/main/steamdb.json) ⚠ 177MB.

Importer les données du fichier `Steam.json` dans une collection mongodb nommée `steam`. Attention, il faut changer le type du champs `release_date`. Ignorez les erreurs s'il y en a, il doit y avoir ***environ*** 74360 documents dans votre base après import.

## Exercice 4

En utilisant la commande de find :

1. Combien y-a-t'il de documents dans la base ?
2. Combien y-a-t'il de documents qui sont du genre `documentary` ?
3. Lister les noms et steam App Id des documents qui ne sont pas de type `dlc` et qui ont un prix compris entre 100 et 120 euros ?

En utilisant la commande aggregate :

1. Combien y-a-t'il de documents dans la base ?
2. Combien y-a-t'il de documents qui sont du genre `documentary` ?
3. Lister les noms et steam App Id des documents qui ne sont pas de type `dlc` et qui ont un prix compris entre 100 et 120 euros ?
4. Lister les différents genres de jeux
5. Lister les différents genre de jeux et les trier par nombre de jeux décroissant
6. Quelle est la moyenne des prix des jeux ?
7. Quelle est la moyenne des prix des jeux pour chaque plateforme ?
8. donner le nombre de jeu par plateformes.
9. donner le prix le plus cher par plateformes.