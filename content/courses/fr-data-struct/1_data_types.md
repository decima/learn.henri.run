---
title: Types de données
cover: ../images/data_types_cover.jpg
type: 1_course
level: 1
description: |
  Ce cours introduit les types de données et leur importance en programmation. Il couvre les types primitifs comme les entiers, les flottants, les booléens et les caractères, ainsi que les types composés tels que les tableaux et les enregistrements.
  Il explore également les structures de données comme les listes, les arbres et les graphes, en mettant l'accent sur leur rôle dans la résolution algorithmique de problèmes.
---

<hideOnSlides>
<credits>
Photo de <a href="https://unsplash.com/fr/@evitka?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">E. Vitka</a> sur <a href="https://unsplash.com/fr/photos/un-lapin-en-peluche-blanc-assis-sur-un-banc-vert-5tbFWFbM72A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</credits>
</hideOnSlides>

<columns>
<column flex-2>

## Qu'est-ce qu'un programme ?

Un programme est une suite d'instructions qui spécifie étape par étape, de manière non ambiguë, des représentations de
données et des calculs. Les instructions sont destinées à manipuler les données lors de l'exécution du programme.

> [!IMPORTANT] **Algorithms + Data structures = Programs**
> [Niklaus Wirth](https://en.wikipedia.org/wiki/Niklaus_Wirth)  - 1985

</column>
<column>

![Niklaus Wirth](../images/nwirth.png)

<small>

**Niklaus Wirth** - 1934-2024  
Professeur d'informatique suisse, inventeur de plusieurs langages de programmation comme le Pascal, le Modula-2 et
l'Oberon.

</small>

</column>
</columns>

---

## Algorithmes

**Un algorithme est une suite finie et non-ambiguë d'opérations ou d'instructions permettant de résoudre un problème**

- Provient du nom du mathématicien persan Al-Khawarizmi (±820), le père de l'algèbre
- Un problème algorithmique est souvent formulé comme la transformation d'un ensemble de valeurs, d'entrée, en un nouvel
  ensemble de valeurs, de sortie

**Quelques exemples ?**

- **Une recette de cuisine ( ingrédients -> plat préparé )**
- **La recherche dans un dictionnaire ( mot -> définition )**

---

## Les structures de données

Différentes structures de données existent pour des données différentes ou répondant à des contraintes algorithmiques
différentes :

<columns>
<column>

Structures finies :

- constantes,
- **variables**,
- **enregistrements**/**structures composées finies** (ligne d'un tableau);

</column>
<column>

Structures indexées :

- **tableaux** (sur [1..n]),
- tableaux multidimensionnels (e.g. tableaux bidimensionnels : sur [1..n, 1..m]; sinon, tableaux de tableaux :
  sur [1..n][1..m]),
- tableaux associatifs,
- vecteurs ;

</column>
<column>

Structures récursives :

- **listes**
- **arbres**,
- **graphes**.

</column>
</columns>

---

## Types de données

Un **type de données** est un ensemble de valeurs et d'opérations définies sur ces valeurs. Il permet de décrire la
nature
des données manipulées dans un programme. Les types de données sont essentiels pour la programmation, car ils
définissent comment les données sont stockées, manipulées et interprétées par le programme.

<columns>
<column flex-2>

### Types de données primitifs

- **Integer** : Représentent des nombres entiers, par exemple, 1, 2, -3.
- **Float** : Représentent des nombres réels avec une partie décimale, par exemple, 3.14, -0.001.
  > [!CAUTION] Attention
  > des flottants peut varier selon l'implémentation et la taille du type.
- **Bool** : Représentent des valeurs de vérité, soit vrai (true) soit faux (false).
- **Char** : Représentent des symboles uniques, par exemple, 'a', 'Z', '3'.

</column>
<column>

```go
type age int
type pi float
type isStudent bool
type initial rune
```

</column>
</columns>

---

## Types de données composés

Les types de données composés sont des structures qui regroupent plusieurs valeurs ou types de données. Ils permettent
de
créer des structures plus complexes et de modéliser des données de manière plus efficace.

<columns>
<column flex-2>

### Tableaux

Un tableau est une collection d'éléments de même type, organisés de manière contiguë en mémoire. Les éléments sont
indexés, ce qui permet un accès rapide à chaque élément.

</column>
<column>

```go
type ages []int
```

</column>
</columns>

<columns>
<column>

```go
type person struct {
name []rune
age  int
is_student bool
}
```

</column>
<column flex-2>

### Enregistrements

Un enregistrement est une structure qui regroupe plusieurs champs de types différents. Chaque champ a un nom et un type
de données associé. Les enregistrements sont utilisés pour représenter des objets complexes.

</column>
</columns>



---

## Qu'est-ce qui motive la définition d'une structure d'une forme ou d'une autre ?

- La donnée en **entrée**
- La donnée **attendue en sortie**
- Le **traitement** même de la donnée