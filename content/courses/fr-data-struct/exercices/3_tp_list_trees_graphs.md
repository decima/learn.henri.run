---
title: TP - Listes, arbres et graphs
type: 2_exercise
level: 3
---

Certains exercices sont prévus pour être réalisés en Go ou PHP, mais vous pouvez les faire dans d'autres langages.
Toutes les instructions par langage se trouvent dans la section **Aide sur les langages**.

## Exercice 1 - Retourner une pile (GO/PHP)

> [!CAUTION] Pour cet exercice, il est interdit d'utiliser autre chose que des piles.

On souhaite créer un algorithme qui retourne une pile **dans elle-même.**
Par exemple, si la pile contient les éléments `[A,B,C,D,E]`, l'algorithme doit avoir retourné dans la pile initiale tout
le contenu `[E,D,C,B,A]`.

**Vous pouvez utiliser AUTANT de piles que nécessaire pour réaliser cet exercice.**


<details>
<summary>en GO</summary>

```go
// Créer une pile nommée "main" et la stocker dans la variable mainStack
mainStack := structures.NewStringStack("main")

// Ajouter des éléments à la pile
mainStack.Push("A")

// Retirer le dernier élément de la pile
element := mainStack.Pop()

// Afficher le contenu de la pile
Print(mainStack)

// Connitre la taille de la pile
mainStack.Len()
```

</details>

<details>
<summary>En PHP</summary>

```php
require 'vendor/autoload.php';

// Créer une pile nommée "main" et la stocker dans la variable mainStack
$mainStack = newStack("main");

// Ajouter des éléments à la pile
$mainStack->push("A");

// Retirer le dernier élément de la pile
$element = $mainStack->pop();

// Afficher le contenu de la pile
echo $mainStack;

// Connaître la taille de la pile
$mainStack->len();
````

</details>

------------------------------------------------------------------------------------------------------------------------------------

## Exercice 2 - Retourner une file (GO/PHP)

> [!CAUTION] Pour cet exercice, il est interdit d'utiliser autre chose que des files.

On souhaite créer un algorithme qui retourne une file **dans elle-même.**
Par exemple, si la file contient les éléments `[A,B,C,D,E]`, l'algorithme doit avoir retourné dans la file initiale tout
le contenu `[E,D,C,B,A]`.

**Comme précédemment, vous pouvez utiliser AUTANT de files que nécessaire pour réaliser cet exercice.**


<details>
<summary>en GO</summary>

```go
// Créer une file nommée "main" et la stocker dans la variable mainQueue
mainQueue := structures.NewStringQueue("main")

// Ajouter des éléments à la file
mainQueue.Enqueue("A")

// Retirer le premier élément de la file
element := mainQueue.Dequeue()

// Afficher le contenu de la file
Print(mainQueue)

// Connaître la taille de la file
mainQueue.Len()
```

</details>

<details>
<summary>En PHP</summary>

```php
<?php
require 'vendor/autoload.php';

// Créer une file nommée "main" et la stocker dans la variable mainQueue
$mainQueue = newQueue("main");

// Ajouter des éléments à la file
$mainQueue->enqueue("A");

// Retirer le premier élément de la file
$element = $mainQueue->dequeue();

// Afficher le contenu de la file
echo $mainQueue

// Connaître la taille de la file
$mainQueue->len();
```

</details>

------------------------------------------------------------------------------------------------------------------------------------

## Exercice 3 - Decouverte des listes chaînées (PHP)

On va créer ensemble un système de gestion de listes chaînées en PHP en utilisant un tableau associatif.
Cet exercice a pour objectif de vous familiariser avec la récursivité et les références en PHP.

### Étape 1 : Créer un noeud

Pour commencer, nous allons créer une fonction `createNode` qui va créer un noeud de liste chaînée.
Un noeud est un tableau associatif qui contient deux clés :

- `value` : la valeur du noeud
- `next` : la référence au noeud suivant (initialement `null`)

Voici la signature de la fonction :

```php
<?php
function createNode($value);
```

à Partir de là, on va créer un noeud avec la valeur "ROOT".

### Étape 2 : Ajouter un noeud.

Créer une fonction `addNode` qui va prendre 2 noeuds en paramètre : le noeud principal et le nouveau noeud à ajouter.
La fonction doit ajouter le nouveau noeud à la fin de la liste chaînée et renvoyer le noeud $head mis à jour.

```php
<?php
function addNode($head, $newNode);
```

### Étape 3 : Afficher un noeud et son contenu

Créer une fonction `printNode` qui va afficher le contenu d'un noeud et de tous les noeuds suivants.

```php
<?php
function printNode($node);
```

### Étape 4 : refaire l'exercice en utilisant des références

En comprenant comment fonctionne les références en PHP, refaire l'exercice précédent en utilisant des références pour
les noeuds.

<questions>
Quel est l'avantage d'utiliser des références dans ce cas ?
</questions>

------------------------------------------------------------------------------------------------------------------------------------

## Exercice 4 (PHP)

Téléchargez le fichier <a href="/resources/datastruct/e5.csv" download>e5.csv</a>.

<details>
<summary>exemple de code PHP de lecture du fichier</summary>

```php
<?php

$file = fopen("e5.csv", "r");

$headers = fgetcsv($file);
$headerSize = count($headers);
$data = [];
while (!feof($file)) {
    $line = fgetcsv($file);
    if($line===false){
        break;
    }
    if (count($line) !== $headerSize) {
        continue;
    }
    $row = array_combine($headers, $line);
    $data[]=$row;
}
```

</details>




Ce CSV contient la description d'un arbre : un identifiant de noeud et son noeud parent.

Pour faciliter les choses, l'id `n` a forcément un parent compris entre 0 et `n-1`.

> Astuce : cet exercice demande de la récursivité et des références.

<questions>

1. Construisez un JSON qui contiendra toutes les données sous forme d'arbre, voici le début des données attendues :

```json
{
  "id": "0",
  "nodes": [
    {
      "id": "1",
      "nodes": [
        {
          "id": "235",
          "nodes": [
            {
              "id": "523",
              "nodes": [
                {
                  "id": "812"
                }
              ]
            },
            {
              "id": "677"
            }
          ]
        },
        {
          "id": "645"
        },
        {
          "id": "887"
        }
      ]
    }
  ]
}
```

2. Construisez les chaines de tous les éléments du tableau suivant le format suivant :

```
0
0,1
0,2
0,3
0,4
0,5
0,4,6
0,4,7
0,2,8
0,4,6,9
0,3,10
0,4,6,11
0,4,12
0,13
0,4,12,14
0,4,6,15
0,4,6,16
...
```


3. Quelle est la profondeur maximale de l'arbre ? Combien de chaînes ont cette longueur ?

</questions>

------------------------------------------------------------------------------------------------------------------------------------

## Exercice 5


<columns>
<column flex-2>

Dans cet exercice, on va partir sur ce graphe de données :

<questions>

1. À la main, trouvez le chemin le plus court qui permette d’aller du point A au point E.
2. À la main, trouvez le nombre de chemins possibles, sans repasser par le même point entre A et E
3. Proposez une structure en CSV simple pour représenter l’ensemble des données de ce graphe

</questions>

</column>
<column>

![Graphe](/resources/datastruct/graph-ex5.png)

</column>
</columns>

-------------------------------------------------------------------------------------------------------------------------

## Exercice 6

Voici un arbre généalogique :

- Je m'appelle U et j'ai 4 demi-sœurs (A,B,C,D) et 1 demi-frère (E).
- A,B et C ont toutes la même mère (F) et nous avons le même père (G).
- D et moi avons la même mère (J) mais pas le même père, le père de D s'appelle L.
- E et moi avons le même père. La mère (K) de E n'est pas ma mère ni la mère de A B et C.
- E a eu 2 femmes EF1 et EF2 et chacune a eu 2 enfants avec E : E11,E12 et E21,E22.
- Mon père (G) a 2 sœurs (H1, H2) et une demi-sœur (H3) du côté de son père (H) et respectivement de (HF1) et (HF2).
- Respectivement, les 2 sœurs de G ont eu 3 enfants (H11, H12, H13) et 2 enfants (H21 et H22).
- Concernant mes demi-sœurs A, B et C, elles ont toutes eu des enfants, respectivement A1, A2, B1, B2, B3, C1 et C2.

<questions>

1. La structure **arbre** vous semble-t-elle adaptée pour présenter ces données de ce problème ?   
   Pourquoi ?
2. Représentez ces données graphiquement
3. Proposez une (ou plusieurs) structure(s) de données pour représenter le problème. En vous basant sur les données de base ET sur les différentes structures proposées, définissez le JSON contenant les différentes données.

</questions>







------------------------------------

## Aide sur les langages

### Go

Pour ces exercices, vous allez utiliser le langage Go. Vous pouvez utiliser un des editeurs en lignes :

- [Better Go Playground](https://goplay.tools/)
- [Go Playground](https://go.dev/play/)

La base de code de base utilisé sera le suivant :

```go
package main

import (
	. "github.com/school-of-decima/gotools/help"
	// décommentez la ligne ci-dessus pour utiliser les structures de données
	// "github.com/school-of-decima/gotools/structures"
)

func main() {

	// ici vous pouvez écrire votre code pour les exercices

	// Quelques fonctionnalités utiles
	someVar := "Hello, World!"

	// Afficher le contenu d'une variable
	Print(someVar) // afficher le contenu de someVar

	// Boucles
	// for classique 
	for i := 0; i < 5; i++ {
		Print(i) // Affiche les nombres de 0 à 4
	}

	// Boucle while
	i := 5
	for i > 0 {
		Print(i) // Affiche les nombres de 5 à 1
		i--
	}
}

```

### PHP

Pour ces exercices, vous allez utiliser le langage PHP. Pour cela, il vous faudra installer PHP sur votre machine ainsi
que [Composer](https://getcomposer.org/).

Une fois cela fait, créez un nouveau dossier pour votre projet et placez-y le fichier `composer.json` suivant :

```json
{
  "require": {
    "school-of-decima/php-tools": "dev-main"
  }
}
```

Ensuite, ouvrez un terminal dans ce dossier et exécutez la commande suivante :

```bash
composer install
```

Une fois cela fait, vous pouvez créer un fichier `exercice1.php` et y placer le code suivant :

```php
<?php
require 'vendor/autoload.php';

// ... votre  cde ici
```

Et vous pouvez commencer à écrire votre code pour les exercices.