---
title: TP - Format de la donnée
type: 2_exercise
level: 2
---

## Exercice 1

<columns>
<column flex-2>
Je souhaite stocker mon carnet d'adresse en XML. Chacun de mes contacts a les informations suivantes :

- Un nom
- Un prénom
- Une date de naissance
- Une addresse postable complète (HINT: exercice 1)
- Des membres de la famille qui sont composés de :
    - Un lien de parenté
    - Un lien vers une autre personne du carnet
1. Proposez une structure XML pour répondre au besoin
2. Proposez une structure JSON pour répondre au besoin

</column>
<column>

 Exemple en YAML

```yaml
- id: 1
  lastname: LARGET
  firstname: Henri
  birthdate: 1991-12-30
  address: ...
  family:
    - user: 2
      status: spouse
- id: 2
  firstname: Nadia
...
```


</column>
</columns>

---

## Exercice 2

Je souhaite stocker les notes d'étudiants dans ma base. Un étudiant (Nom/Prénom) a une ou plusieurs notes. Chaque note est associée à un nom de matière et à un type d'évaluation (par exemple : data_sructures_tp2).

1. Proposez une solution à ce problème en JSON
2. Proposez une solution à ce problème en CSV
3. Proposez une solution à ce problème en YAML
4. Quelle est la meilleure solution ? Pourquoi ?

---

## Exercice 3

Je souhaite formatter les données suivantes en plusieurs JSON, proposez une structure adaptée :

```json
[
    {
        "order_id":"Ar44Zp",
        "client":"HONNÊTE Marie",
        "shippingAddress": [
            "3 esplanade Augustin Aussedat",
            "Papeteries Image Factory",
            "Cran Gevrier",
            "74960 Annecy"
        ],
        "products":[
            {
                "name":"clé USB", 
                "quantity":10, 
                "priceUnit":205, 
                "vat": 410,
                "total": 2460
            },
                        {
                "name":"JSON pour les nuls", 
                "quantity":1, 
                "priceUnit":1995, 
                "vat": 110,
                "total": 2105
            }
        ]
    },
    {
        "order_id":"RR21P",
        "client":"BON Jean",
        "shippingAddress": [
            "1 rue de la Paix",
            "75000 Paris"
        ],
        "products":[
            {
                "name":"Comment torturer des étudiants", 
                "quantity":1, 
                "priceUnit":2005, 
                "vat": 112,
                "total": 2517
            },
                        {
                "name":"JSON pour les nuls", 
                "quantity":1, 
                "priceUnit":1995, 
                "vat": 110,
                "total": 2105
            }
        ]
    }
]
```

---

## Exercice 4

J'ai un menu de restaurant qui a les informations suivantes :

- Nom du produit
- Une description de 100 caractères maximum
- Prix du produit
- Allergènes possibles
- Une catégorie de produit (une, parmi la liste suivante : Entrée | Boisson | Viandes | Poisson | Salade | Dessert)



1. Proposez une représentation **en YAML**
2. Proposez une représentation **en CSV**
3. Proposez une représentation **en XML**
4. Proposez une représentation **en JSON**
5. Laquelle choisiriez-vous et pourquoi ?

---

# Formats de présentation

## Exercice 5


<columns>
<column flex-2>

Pour cet exercice, vous allez avoir besoin de ce fichier : 

<a href="/resources/datastruct/scp101.txt" download>scp101.txt</a>

L'objectif est de mettre en forme l'article scp101.txt au format HTML.

</column>
<column>

![scp101 rendered](/resources/datastruct/scp101.png)

</column>

</columns>

---
## Exercice 6

<columns>
<column flex-2>


Pour cet exercice, vous allez avoir besoin de ce fichier :

<a href="/resources/datastruct/scp871.txt" download>scp871.txt</a>

---

Si vous avez besoin d'une image de ressource, elle se trouve :

<a href="/resources/datastruct/cake.jpeg" download>cake.jpeg</a>


L'objectif est de mettre en forme l'article scp101.txt au format **HTML**.



</column>


<column>

![scp871 rendered](/resources/datastruct/scp871.png)

</column>

</columns>

---

## Exercice 7

En reprenant le fichier précédent, transformez le fichier **en markdown** pour respecter le format HTML.

---

## Exercice 8

<columns>
<column>


En vous aidant du code fourni dans l'exercice et du cours, dessinez cette rosace dans son rectangle en svg.

```xml
<svg viewBox="-150 -150 300 300" xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="50" stroke="black" fill="transparent"/>
</svg>
```


Les couleurs utilisées sont :

- `#f0f0f0`
- `red`
- `blue`
- `black`
- `green`
- `yellow`
- `purple`
- `pink`
- `transparent`

Pour visualiser votre travail, créez un fichier .svg et ouvrez le fichier avec votre navigateur


</column>
<column>

![rosace.png](/resources/datastruct/rosace.png)

<details>
<summary>Indice/Rappel des cours de 4ème</summary>

![triangle rectangle](/resources/datastruct/rosace-hint.png)

</details>


</column>
</columns>

---
## Aller plus loin
Pour cet exercice, pas d'indices, juste 2 notions à découvrir : 
- courbes de bézier et Path.

![](/resources/datastruct/landscape.svg)

<details>
<summary>
couleurs et code de base.
</summary>

<a href="/resources/datastruct/night.svg" download>Télécharger l'exemple de base</a>

![](/resources/datastruct/landscape_color_hint.svg)



</details>