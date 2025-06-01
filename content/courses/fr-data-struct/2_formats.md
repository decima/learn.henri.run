---
title: Format de la donnée
cover: ../images/formats_cover.jpg
type: 1_course
level: 2
---


<hideOnSlides>
<credits>
Photo de <a href="https://unsplash.com/fr/@murrrchalla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marina Shatskih</a> sur <a href="https://unsplash.com/fr/photos/ours-brun-en-peluche-portant-bonnet-tricote-bleu-IbLIHK6mYb0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</credits>
</hideOnSlides>

<columns>
<column>

En informatique, un **format de données** est la façon dont est **représenté** (codé) un type de données, sous forme
d’une **suite de bits**. Par commodité, on interprète cette suite de bits comme un nombre binaire, et on dit par
raccourci que la donnée est représentée comme un nombre.

Par exemple, le caractère `C` est généralement codé comme une suite dont 3 bits sont activés, ce que l’on écrit
`0100 0011`, soit `67` en décimal.

</column>
<column>

Un **format de données** est ainsi une **convention** (éventuellement normalisée) utilisée pour représenter des
données — des informations représentant un texte, une page, une image, un son, un fichier exécutable, etc.

C’est un gabarit où les données sont placées à des endroits particuliers pour que l’outil qui lit ce format trouve les
données où il s’attendait à les trouver. Lorsque ces données sont stockées dans un fichier, on parle de format de
fichiers.

</column>
</columns>

Ces formats de fichiers peuvent contenir des données supplémentaires dites “méta-données”, qui ne sont pas la donnée
elle-même mais un complément d’information. Pour un fichier de musique, il peut s’agir des données sur l’album et
l’artiste, pour une image, le type d’appareil photo utilisé, la position GPS…

---

## Idée reçues sur les Extensions

Une extension de fichier **ne définit pas** le type du fichier.

Ce qui définit le fichier, c’est la capacité à un logiciel à repérer certaines informations dans le fichier qui lui
indiquent le format.

En parlant de format, on parle également de [MIME-types](https://www.rfc-editor.org/rfc/rfc2046.html) (Multipurpose
Internet Mail Extensions), un standard de notation du type de média.

---

## Formats d’image

### Format bitmap

<columns>
<column>


![Exemple de **bitmap**](../images/bitmap.png  "Exemple de **bitmap**")


</column>
<column flex-2>

Prenons une bitmap noire et blanche (1 la couleur de forme, 0 la couleur de fond)

```
1000101010001000101010001
```

En coupant la chaîne de caractères par rapport à n=5,

```
10001 01010 00100 01010 10001
```

Et en représentation d’image :

```
█   █
 █ █
  █
 █ █
█   █
```

Formats populaires : JPEG, PNG, GIF, TIFF,…

</column>
</columns>

---

### Format vectoriel

Une image au format vectoriel est une image qui se décrit par des ensembles de coordonnées mathématiques et non par une
carte de point. Par exemple :

- pour décrire une ligne, il suffit de connaître son point de départ et d’arrivée ;
- pour un rectangle (ayant ses côtés alignés aux axes du système de coordonnées en cours), deux points suffisent aussi (
  deux coins opposés) ;
- pour un cercle, un seul point, ainsi qu’un rayon, sont nécessaires.

En outre, des informations sur le tracé sont nécessaires : les attributs graphiques sont l’épaisseur, le style (continu
ou pointillés), la couleur du trait, sa transparence, etc.  
Une image vectorielle est donc un ensemble de coordonnées, d’attributs et de commandes que le programme d’affichage (à
l’écran ou sur papier) se charge d’interpréter.



<columns>
<column flex-2>

```xml

<svg viewBox="0 0 300 300">
    <line x1="0" y1="0" x2="80" y2="80" stroke="black"/>
    <rect x="80" y="80" width="100" height="100" fill="yellow"/>
    <circle cx="100" cy="100" r="50" stroke="red" fill="none"/>
</svg>
```

</column>
<column>
<noPrint>

<svg viewBox="0 0 300 300">
    <rect x="0" y="0" width="200" height="200" fill="none" stroke="#999"/>
    <line x1="0" y1="0" x2="80" y2="80" stroke="black"/>
    <rect x="80" y="80" width="100" height="100"  fill="yellow"/>
    <circle cx="100" cy="100" r="50" stroke="red" fill="none"/>
</svg>

</noPrint>
</column>
</columns>


---

MIME Types

| Extension | Type de document                  | MIME          |
|-----------|-----------------------------------|---------------|
| jpg, jpeg | Image au format JPEG              | image/jpeg    |
| png       | Portable Network Graphics         | image/png     |
| gif       | Graphics Interchange Format (GIF) | image/gif     |
| svg       | Scalable Vector Graphics (SVG)    | image/svg+xml |
