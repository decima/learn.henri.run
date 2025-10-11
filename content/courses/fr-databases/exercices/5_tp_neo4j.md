---
title: TP - Neo4j
type: 2_exercise
level: 5
---

On va utiliser la base Neo4J disponible sur http://henri.run:7474/browser/)
Pour vous connecter à l’interface graphique il faut utiliser l’url suivante :

neo4j://henri.run:7687
login: students
password: ******2K

--------------------------------
Exercice 1
--------------------------------

En utilisant la base de donnée `votre_nom` (à créer si elle n’existe pas) et en utilisant le langage Cypher, créer les
noeuds et relations suivants :

```go=
type Person struct {
	Name string
	Born int
}
type Gang struct {
	Name string
}
type MemberOf struct {
	Person Person
	Gang   Gang
	Since  int
}

```

et insérer les étudiants de la en tant que personnes dans 3 gangs distincts :

- Gang des Fraises
- Gang des Tomates
- Gang des Concombres

Récupérer les personnes qui font partie du gang des fraises.

--------------------------------
Exercice 2
--------------------------------
Pour l’exercice 2, on va utiliser une partie du dataset du catalogue LEGO.

[LEGO Catalog Database Downloads](https://rebrickable.com/downloads/)

La liste des noeuds :

- Category : La catégorie des pièces (plate, brick, etc...)
- Color : La couleur de la brique (blue, red, bluish gray,...)
- Inventory : Un groupe de pièces qui constitue le set pour sa version (version 1)
- InventoryPart : une quantité de pièces (Color, Part, Quantity) pour un inventaire.
- Material : La matière de la pièce (plastic,...)
- Part : Le nom de la pièce (brick 2x2)
- Set : Une boite lego (exemple : L'étoile noire)
- Theme : Le thème de la boite (exemple : Lego starwars)

1. Lister tous les noeuds Material.
2. Trouver le noeud Material qui a pour `name:Metal`.
3. Trouver le nombre de sets.
4. Lister les noms de tous les Set du Theme nommé `Police`.
5. Lister toutes les couleurs du set nommé `Medieval Blacksmith`
   et les trier par ordre alphabétique

   | "color" |
          | --- |
   | "Black" |
   | "Blue" |
   | "Bright Green" |
   | "Bright Light Orange" |
   | "Dark Azure" |
   | "Dark Blue" |
   | "Dark Bluish Gray" |
   | "Dark Brown" |
   | "Dark Orange" |
   | "Dark Red" |

6. Lister toutes les couleurs et le nombre de pièces, puis trier le resultat par ordre décroissant du set nommé
   `Medieval Blacksmith`

   | "color" | "total" |
          | --- | --- |
   | "Reddish Brown" | 655 |
   | "Black" | 238 |
   | "Light Bluish Gray" | 237 |
   | "Dark Bluish Gray" | 158 |
   | "White" | 157 |
   | … |  |

7. Retrouvez les 2 ID des sets `Elf Boy` et `Elf Girl`.

   | "BOY" | "GIRL" |
          | --- | --- |
   | 10165-1 | 10166-1 |

1. Retrouvez toutes les briques aui sont en commun entre le set `Elf Boy` et `Elf Girl` et donner leur noms distinct.

   | "Brick 1 x 2 with Eyes and Smile Print" |
          | --- |
   | "Brick 1 x 2" |
   | "Plate 2 x 2" |
   | "Slope Inverted 45° 2 x 1" |
   | "Slope 45° 2 x 1 with Bottom Pin" |
   | "Slope 45° 2 x 2" |
   | "Plate Round 1 x 1 with Solid Stud" |
   | "Plate 2 x 4" |

2. Comme à la question d'avant, mais cette fois ci, avec la même couleur et le même nombre de pièces dans le set.

   | "name" | "quantity" | "color" |
          | --- | --- | --- |
   | "Brick 1 x 2 with Eyes and Smile Print" | 1 | "Yellow" |
   | "Brick 1 x 2" | 1 | "Red" |
   | "Plate 2 x 2" | 1 | "Black" |
   | "Brick 1 x 2" | 2 | "Blue" |
   | "Plate Round 1 x 1 with Solid Stud" | 1 | "Yellow" |
   | "Plate Round 1 x 1 with Solid Stud" | 2 | "Yellow" |
   | "Plate Round 1 x 1 with Solid Stud" | 1 | "White" |
   | "Plate Round 1 x 1 with Solid Stud" | 1 | "White" |
   | "Plate Round 1 x 1 with Solid Stud" | 1 | "White" |
   | "Plate Round 1 x 1 with Solid Stud" | 1 | "White" |
   | "Plate 2 x 4" | 1 | "White" |

3. Trouver la quantité totale de pièces de tous les sets confondus de la base.
4. Donner la moyenne arrondie à 2 chiffre après la virgule du nombre de pièces par set.
5. Donner la moyenne arrondie à 2 chiffre après la virgule du nombre de pièces différentes par set.
6. En utiliser les statistiques d'avant, donner la moyenne du nombre de pièces de types différent dans les sets.
7. Vérifier ce calcul en calculant la moyenne des quantités. Les resultats sont-ils identiques ? Quelle valeur
   utiliseriez-vous?

--------------------------------
Exercice 3 (bonus)
--------------------------------
En reprenant mon arbre généalogique, insérez les données dans votre base graph.
