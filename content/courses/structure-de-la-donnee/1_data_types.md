---
title: Types de données
cover: ../images/data_types_cover.jpg
---

<hideOnSlides>
Photo de <a href="https://unsplash.com/fr/@vallabh1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Arvind Vallabh</a> sur <a href="https://unsplash.com/fr/photos/une-plate-forme-petroliere-au-milieu-de-locean-au-coucher-du-soleil-rqWWhKzVCaU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</hideOnSlides>

{{<cols>}}
{{<col 2>}}

## Qu'est-ce qu'un programme ?

Un programme est une suite d'instructions qui spécifie étape par étape, de manière non ambiguë, des représentations de
données et des calculs. Les instructions sont destinées à manipuler les données lors de l'exécution du programme.

> [!IMPORTANT] **Algorithms + Data structures = Programs**
> [Niklaus Wirth](https://en.wikipedia.org/wiki/Niklaus_Wirth)  - 1985

{{< /col >}}
{{<col 1>}}

![Niklaus Wirth](../images/nwirth.png)

<small>

**Niklaus Wirth** - 1934-2024  
Professeur d'informatique suisse, inventeur de plusieurs langages de programmation comme le Pascal, le Modula-2 et
l'Oberon.

</small>

{{< /col >}}
{{< /cols >}}

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

Structures finies :

- constantes,
- **variables**,
- **enregistrements**, (ligne d'un tableau)
- **structures composées finies** ;

Structures indexées :

- **tableaux** (sur [1..n]),
- tableaux multidimensionnels (e.g. tableaux bidimensionnels : sur [1..n, 1..m]; sinon, tableaux de tableaux :
  sur [1..n][1..m]),
- tableaux associatifs,
- vecteurs ;

Structures récursives :

- **listes**
- **arbres**,
- **graphes**.

---

## Types de données
Un **type de données** est un ensemble de valeurs et d'opérations définies sur ces valeurs. Il permet de décrire la nature
des données manipulées dans un programme. Les types de données sont essentiels pour la programmation, car ils
définissent comment les données sont stockées, manipulées et interprétées par le programme.
{{< cols >}}
{{< col 2>}}
### Types de données primitifs
- **Entiers** : Représentent des nombres entiers, par exemple, 1, 2, -3.
- **Flottants** : Représentent des nombres réels avec une partie décimale, par exemple, 3.14, -0.001.
  > [!CAUTION]
  > des flottants peut varier selon l'implémentation et la taille du type.
- **Booléens** : Représentent des valeurs de vérité, soit vrai (true) soit faux (false).
- **Caractères** : Représentent des symboles uniques, par exemple, 'a', 'Z', '3'.
{{< /col >}}
{{< col 1>}}
{{< /col >}}
{{< /cols >}}
