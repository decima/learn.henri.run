---
title: TP - Redis
type: 2_exercise
level: 2
---

# Ressources

Un project a été mis à disposition pour votre usage afin de réaliser les différents exercices : https://github.com/henri-corp/tp-redis-js-skeleton

La bibliothèque Redis utilisée est [node redis](https://github.com/NodeRedis/node-redis), elle contient toute la documentation nécessaire.

Interface admin :

```bash
https://redis.henri.run
```

URL de connexion redis :

```bash
REDIS_URL=redis://:*********@henri.run:6379
```

> [!CAUTION] Merci a tous d'utiliser la base qui vous sera attribuée par le formateur. Ne pas utiliser la base 0.

 ## Exercice 1

En reprenant la logique de [Exercice 1](/courses/fr-data-struct/exercices/3_tp_list_trees_graphs/)

1. À l'aide d'une boucle et d'un `RPUSH`, insérer dans une liste redis nommée `students_ex1`
```javascript
    ['Henri','Evann','Clément','Thomas','Nathan','Sacha','Killian','Muhammed','Eliott','Céleste','Basile','Noam','Anh Hiep','Thomas','Ninon']
```

Pour éviter les doublons d'insertion, vous pouvez utiliser les fonction `LTRIM` pour vider la liste et `LLEN` pour en connaitre la taille.

1. En vous aidant uniquement des fonctions redis `RPUSH`, `RPOP` et `LLEN`,sans utiliser de variables et en utilisant uniquement les listes redis, inversez l'ordre des étudiants. de la liste.
2. en utilisant `LRANGE`, afficher la liste des étudiants avant et après le tri.

 ## Exercice 2

En reprenant la logique de [Exercice 2](/courses/fr-data-struct/exercices/3_tp_list_trees_graphs/)

1. À l'aide d'une boucle et d'un `RPUSH`, insérer dans une liste redis nommée `students_ex2`
```javascript
    ['Henri','Evann','Clément','Thomas','Nathan','Sacha','Killian','Muhammed','Eliott','Céleste','Basile','Noam','Anh Hiep','Thomas','Ninon']
```
2. En vous aidant uniquement des fonctions redis `RPUSH`, `LPOP` et `LLEN`,sans utiliser de variables locales et en utilisant uniquement les listes redis, inversez l'ordre des étudiants.
3. en utilisant `LRANGE`, afficher la liste avant le tri et après le tri.

 ## Données

<a href="/resources/db/superheroes.json" download>superheroes.json</a>

La suite des exercices va porter sur le fichier `superheroes.json`. Pour utiliser le fichier, enregistrez le dans le dossier exercices et ce fichier json est utilisable directement avec l'instruction `require` :

```jsx
const data = require('./superheroes.json');
console.log(data);
```

 ## Exercice 3

À partir du fichier `superheroes.json`, créer 6 sets :

- `champion:creation:gender` qui contiendra tous les genres possibles stockés dans le json.
- `champion:creation:race` qui contiendra toutes les races possibles stockés dans le json.
- `champion:creation:eye` qui contiendra toutes les couleurs d'yeux possibles stockés dans le json.
- `champion:creation:hair` qui contiendra toutes les couleurs de cheveux possibles stockés dans le json.
- `champion:creation:alignment` qui contiendra tous les alignements possibles des héros.
- `champion:creation:name` qui contiendra tous les mots possible de super héros (pour cela il va falloir séparer les noms de chaque héros en fonction des espaces et autres caractères). Puis afficher toutes les valeurs pour chaque set.

> Attention ! certaines valeurs peuvent être inexistantes ou contenir "-" comme données.
>

 ## Exercice 4

| Key | Value |
| --- | --- |
| name | Blade |
| alignment | good |
| combat | 90 |
| durability | 50 |
| intelligence | 63 |
| power | 40 |
| speed | 38 |
| strength | 28 |

À partir du fichier `superheroes.json`, pour chaque alignement, créer un set `hero:ALIGNMENT` qui contiendra les id des différents personnages du fichier.

On va également créer une Hasmap par `hero:profile:{id}` qui contiendra le nom du héros, son alignement, et toutes les **powerstats**

Voici les données à stocker par exemple.


 ## Exercice 5

À partir des données stockées dans les sets de `champion:creation:*` sélectionnez de manière aléatoire (`SRANDMEMBER`) pour chaque propriété une valeur.

Pour le nom du héros il sera composé de 3 noms tirés aléatoirement et mis bout à bout, par exemple : `Quantum Isis Stargirl`.

Pour les différentes statistiques du héros, il faudra générer des nombre aléatoire entre 1 et 100. Il faut enfin lui générer un ID (on utilisera le `current timestamp`).

Enfin, il faudra stocker le héros dans une hashmap `champion:profile:{ID}`. puis on stockera l'id du dernier héros créé à la clé `champion:current`.

A chaque fois qu'on voudra jouer un autre héros, on exécutera ce script qui créera un nouveau champion.


 ## Exercice 6

On va entamer un combat. En fonction de l'alignement du champion courant on va sélectionner un héros d'un autre alignement. La phase de combat va opposer ce champion et le héros.

Comment va se dérouler le combat ? Chaque personnage a un nombre de point égal à sa durabilité.

à tour de rôle en commençant par le champion, chaque personnage va lancer 1dX (X la capacité de combat), pour définir la force de l'attaque. Si la force est inconnue, alors la base de l'attaque sera de 25.

Nous venons de créer un héros :

```jsx
{
   "intelligence": 90,
   "strength": 75,
   "speed": 70,
   "durability": 80,
   "power": 100,
   "combat": 40
}
```

Ce héro devra lancer un dé entre 1 et 40.

Par exemple, le héro Spiderman :

```json
{
   "intelligence": 90,
   "strength": 55,
   "speed": 67,
   "durability": 75,
   "power": 74,
   "combat": 85
}
```

Les points de vie de spiderman sont de 75. il perdra donc au pire 40 points de vie.

Enfin quand le combat finit, en fonction du vainqueur on va stocker le nombre de victoires du personnage ainsi que son nom dans un set trié `leaderboard`.

 ## Exercice 7

Afficher le leaderboard avec tout en haut le meilleur combatant.

> hint : utiliser `sendCommand`.
>

Le résultat attendu est :

```markdown
| Fighter                        | Victories  |
|--------------------------------|------------|
| Rhino Corsair Kraven           | 146        |
| Mogo Wonder Poison             | 38         |
| Bizarro                        | 23         |
| Living Tribunal                | 19         |
| Deathstroke                    | 17         |
| Sinestro                       | 16         |
| Sentry                         | 16         |
| Robin VI                       | 16         |
| Lobo                           | 16         |
| Deadpool                       | 16         |
| Sandman                        | 15         |
| Red Hulk                       | 15         |
| Gladiator                      | 15         |
| Juggernaut                     | 14         |
| The Comedian                   | 13         |
| Galactus                       | 13         |
| Etrigan                        | 13         |
| Copycat                        | 13         |
| Black Flash                    | 13         |
| Man-Bat                        | 12         |
| Toad                           | 11         |
| Indigo                         | 9          |
```