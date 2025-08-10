---
title: Évaluation - Aventure textuelle
type: 3_evaluation
level: 4
---

Dans le cadre du module **Structure de la donnée,** l’évaluation portera sur la manipulation de formats de données.

Par binômes, créez une aventure textuelle dans **le langage de votre choix**. Cette aventure textuelle peut s'inspirer
des "livres dont vous êtes le héros".

Exemples de livres dont vous êtes le héros :

[bibl.remz.ca](https://bibl.remz.ca/ "_blank"), et devra se lancer en **ligne de commande**.

Au lancement du programme, il devrait être possible de "définir son personnage".

Ce personnage devra être stocké dans un fichier de sauvegarde avec ses compétences et sa progression actuelle. (ex :
game.xml)

**Ensuite, il faudra dérouler la progression de l’aventure définie en JSON.**

```
Vous êtes devant l'entrée de la grotte, et vous entendez un bruit au loin.

1. Je rentre dans la grotte
2. Je retourne travailler mon projet.

Votre choix ?  <- 1

Finalement vous vous dites qu'entrer dans une mine c'est moins dangeureux que
satisfaire un professeur sadique.

Soudain, un troll vous attaque !

1. Essayer de se défendre (lancer un dé) ?
2. Fuir ?

Votre choix ? <- 1

Vous avez fait <- 6 !
```

Ne pas oublier, qu'il faudra intégrer le concept de lancer de dés.

Enfin, quand la partie s'achève (soit par une victoire, soit par la mort), le jeu s'arrête et il faut générer un
Markdown qui contiendra la totalité de l'aventure parcourue, comme un roman, avec des images.

> [!CAUTION] Attention ! il faudra fournir un readme avec a minima la procédure pour installer le jeu, et pouvoir le
> lancer et ce qu’il me faut pour pouvoir le faire.

## Rendu :

- Par **Binôme** (ou en **trinômes** si impaires, sauf si classe de 3 étudiants dans ce cas, **en solo**)
- Durée : 1 mois ~ (2 **novembre à 23h59**)
- Via **Github**, invitez **Decima** au projet.

## Fonctionnalités attendues :

- Pouvoir jouer au jeu
- Sauvegarder l’état du jeu pendant la partie
- Récupérer un compte rendu de l’aventure

### Éléments pris en considération lors de l’évaluation

Donné à titre indicatif

| **Structure de données (/6)**                         |
|-------------------------------------------------------|
| Utilisation pertinentes d'objets pour l'histoire      |
| Utilisation de tableaux pour l'histoire               |
| Définition de la structure de la sauvegarde du joueur |

| **Format (/5)**            |
|----------------------------|
| Respect du format JSON     |
| Respect du format Markdown |
| Respect du format XML      |

| **Algorithmique (/5)**          |
|---------------------------------|
| Workflow question/réponse       |
| Le projet ne crash pas          |
| Déroulement des étapes          |
| Gestion des statistiques joueur |
| Sauvegarde                      |
| Fin de partie                   |
| Lancer de dé                    |

| **Qualité (/4)**                               |
|------------------------------------------------|
| Readme (explications, installation et usage)   |
| Gestion de projet (noms de commits pertinents) |
| Qualité du code                                |
| qualité du contenu                             |