---
title: TP - Types de données
type: 2_exercise
level: 1
---

### Exercice 1

Répondre aux questions en justifiant chaque réponse :

- Quel type de donnée doit-on utiliser pour définir un `age` ?
- Quel type de donnée doit-on utiliser pour définir un `phoneNumber` ?
- Quel type de donnée doit-on utiliser pour définir un `postalCode` français ?
- Je souhaite stocker le mot `Bonjour`, quel type dois-je utiliser ?

Définir les structures de base pour les types suivants :

- `date` (1991-12-30)
- `address` (3 esplanade Augustin Aussedat, Papeteries Image Factory, Cran-Gevrier, 74000 Annecy)
- `time` (15:04:05 GMT)
- `money` (857.65€)
- `iso8601Datetime` ([iso8601](https://www.w3.org/TR/NOTE-datetime) / [rfc3339](https://datatracker.ietf.org/doc/html/rfc3339))
- `rfc3966Phone` ([rfc3966](https://datatracker.ietf.org/doc/html/rfc3966))

---

### Exercice 2

Vous devez réaliser une application de gestion des livres de la bibliothèque pour permettre aux visiteurs de trouver
rapidement un livre en stock.

Le moteur de recherche devra permettre de trouver un livre par son nom, son auteur, des mots-clés (hashtags ?), ou
encore par son éditeur.

Proposez une description des différentes structures de données en jeu dans ce problème.

---

### Exercice 3

On vous demande de réaliser un outil de gestion de congés dans votre entreprise. Quand un employé fait une demande de
congés, elle doit être approuvée par son supérieur hiérarchique et le service RH. Chaque refus de demande, doit être
motivé que ce soit par le supérieur hiérarchique ou les RH.

1. Proposez une description des différentes structures de données en jeu dans ce problème.

---

### Exercice 4

On vous demande de réaliser un réseau social de type **Instagram** 🏞️. **(**ou **Facebook** 👴🏼, **~~Twitter~~ X** ou 
**LinkedIn**)

1. Quelles sont les données importantes à stocker ?
2. Proposez une description des différentes structures de données.

---

### Exercice 5

On vous demande de réaliser un logiciel bancaire de gestion de comptes.

1. Quelles sont les données importantes à stocker ?
2. Proposer une description des différentes structures de données.

---

## Aller plus loin

### Exercice 6

Dans le contexte épidémiologique de 2020, les personnes étaient confinées chez elles. Elle pouvaient se rendre à leur travail
à la condition que leur entreprise leur ait signé une autorisation enregistrée à la préfecture. Les personnes habitent
dans un quartier, et l'entreprise peut se trouver dans un autre quartier.

1. Définissez les différentes données qui vous semblent importantes pour définir un quartier, une entreprise, personne.
2. Proposez une description des différentes structures de données en jeu dans ce problème.

---

### Exercice 7

Dans le contexte d'organisation du retour en présentiel en 2021, une école souhaitait mettre en place une plateforme
d'organisation des salles de cours pour ses promos, sachant que la distanciation sociale oblige à répartir les étudiants
dans plusieurs salles. On veut mettre en place une plateforme ou des étudiants sont dans une promo, la promo a des cours
de prévu dans plusieurs salles, mais on souhaite savoir pour un souci de suivi de cas-contact dans quelle salle, quel
étudiant était pour une matière donné - sa "présence".

1. Définissez les différentes données qui vous semblent importantes pour définir un étudiant, une matière.
2. Proposez une description des différentes structures de données en jeu dans ce problème.