---
title: Listes, Arbres et graphs
cover: ../images/tree_cover.jpg
type: 1_course
level: 3
---

<hideOnSlides>
<credits>
Photo de <a href="https://unsplash.com/fr/@murrrchalla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marina Shatskih</a> sur <a href="https://unsplash.com/fr/photos/ours-brun-en-peluche-sur-une-surface-en-beton-kBo2MFJz2QU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</credits>
</hideOnSlides>


On peut caractériser les structures de données selon plusieurs critères :

Linéaire / Non-linéaire : Les éléments se suivent-ils en séquence ?

Ordonnée / Non-ordonnée : L'ordre des éléments a-t-il une importance ?

Homogène / Non-homogène : Tous les éléments sont-ils du même type ?

---

## Complexité

Pour comparer l'efficacité des opérations sur ces structures, nous utiliserons la notation Big O (ex: O(1), O(n), O(log
n)), qui mesure comment le temps d'exécution ou l'espace mémoire augmente avec la quantité de données.

![big O comparison](../images/bigO.png "comparaison des complexités")

C'est ce qu'on appelle : **la complexité d'un algorithme**

---

<columns>
<column>

### O(1)

```js
function getFirstElement(array) {
    return array[0]; // Accès direct au premier élément
}
```

</column>
<column>

### O(n)

```js
function findElement(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Parcours de tous les éléments
        }
    }
    return -1; // Élément non trouvé
}
```

</column>
</columns>

<hideOnSlides>

### O(log n)

```js
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid; // Élément trouvé
        } else if (array[mid] < target) {
            left = mid + 1; // Recherche dans la moitié droite
        } else {
            right = mid - 1; // Recherche dans la moitié gauche
        }
    }
    return -1; // Élément non trouvé
}
```

### O(n^2)

```js
function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array; // Tableau trié
}
```

### O(2^n)

```js
function fibonacci(n) {
    if (n <= 1) {
        return n; // Cas de base
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Appels récursifs
}
```

</hideOnSlides>

---

## Les Structures Linéaires

> [!NOTE] Dans une structure linéaire, les éléments sont organisés les uns à la suite des autres.

Ce sont les deux manières les plus fondamentales de représenter une séquence.


---

### Le Tableau

Principe : Un bloc de mémoire contigu.

Avantage : Accès ultra-rapide à un élément par son index : O(1).

Inconvénient : L'ajout ou la suppression d'un élément au milieu est lent, car il faut décaler tous les autres : O(n).

---

### La Liste Chaînée

Principe : Une liste linéaire et ordonnée. Chaque élément, ou "nœud", contient une information et une référence (un "
pointeur")
vers l'élément suivant. La liste possède une "tête" (le premier nœud) et le dernier nœud pointe vers une
valeur nulle, indiquant la fin. On sait donc ce qui suit, mais pas ce qui précède.

**Comment ça marche ?**

```go
// Structure d'un nœud

type node struct{
value any
next node
}

type linkedList struct{
head node
}

```

**Avantage** : L'ajout ou la suppression d'un élément (si l'on sait où) est très rapide, il suffit de changer les
pointeurs : O(1).

**Inconvénient** : L'accès à un élément au milieu est lent, car il faut parcourir la liste depuis la tête : O(n).

![img.png](../images/linkedlist.png)

---

## Piles et Files (stacks and queues)

Ce ne sont pas des structures en soi, mais des "règles du jeu" qui peuvent être implémentées avec des tableaux ou des
listes chaînées.

---

### La Pile (Stack)

<columns>
<column flex-2>


Une pile est une structure de données **linéaire** et **ordonnée**.

La particularité de la pile est sa structure **LIFO** (Last In, First Out).

Exemple de la vie de tous les jours :

- La pile d'assiettes
- Une pile de t-shirts
- Une pile de journaux
- Une boîte aux lettres

Cas d'usages en programmation :

- Garder un historique et être capable de revenir en arrière facilement.

</column>
<column>

![](../images/lifo.png)

</column>
</columns>


---

### La File d'attente (Queue)

<columns>
<column flex-2>


Une file d'attente est une structure de données **linéaire** et **ordonnée**.

Beaucoup plus souvent utilisée on appelle cette file une liste de type **FIFO** (First-In First-Out).

Exemple de la vie de tous les jours :

- La queue à la caisse

Cas d'usages en programmation :

- Une file d'attente avant traitement

</column>
<column>

![](../images/fifo.png)


</column>
</columns>

---

<columns>
<column>

## Arbres

Un arbre est une structure hiérarchique de nœuds. Chaque nœud est lié aux autres nœuds et peuvent avoir plusieurs
enfants.

Il existe un nœud ROOT (racine), et chaque nœud sans enfant est appelé est LEAF (feuille).

Exemples :

- Hiérarchie en entreprise

Dans un arbre, il y a toujours une notion de **hiérarchie**.

Exemples d'usage :

- Systèmes de fichiers
- Bases de données hiérarchiques

</column>
<column>

![img.png](../images/tree.png)

</column>
</columns>

```go
type treeNode struct {
value any
children []treeNode
}
type tree struct {
root treeNode
}
```

---

### **Cas Particulier : Les Arbres Binaires**

Un arbre binaire est un arbre dont les nœuds ne peuvent pas avoir plus de 2 enfants.

On parle d'arbre **strict** quand les nœuds n'ont exactement que 0 ou 2 nœuds.


---

## Graphes

<columns>
<column>



![Graph](../images/graph.png)

</column>
<column flex-2>

Un graphe est un ensemble de nœuds (Nodes) reliés les uns les autres par des arêtes (edges).

Un graphe, c'est donc 2 ensembles de **sommets** et d'**arêtes**. Ces arêtes sont forcément reliées à 2 sommets de
l'ensemble des sommets.

**Un arbre** est un graphe **peu connecté** et **acyclique**

Exemples d'usage :

- Réseaux sociaux
- Réseaux de transport
- Cartographie

</column>
</columns>

---


<columns>
<column>

### Graphe Orienté

On peut définir un sens dans les arêtes du graphe. Dès lors, le graphe devient un graphe Orienté.

![](../images/graph_with_directions.png)

</column>
<column>

### Graphe Pondéré

Un graphe dit "Pondéré" est un graphe dont les arêtes ont un poids. Dans le cas d'un graphe orienté 2 arêtes entre 2
nœuds, peuvent ne pas avoir le même poids.

![](../images/graph_with_weights.png)

</column>
</columns>

---

<columns>
<column>

```go
type Edge struct {
from Node
to   Node
weight int
}
```

</column>
<column>

```go
type Node struct {
value any
edges []Edge
}
```

</column>
<column>

```go

type Graph struct {
nodes []Node
edges []Edge
}
```

</column>
</columns>