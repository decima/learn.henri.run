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


---

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

<svg viewBox="0 0 300 300" width="100%" height="">
    <rect x="0" y="0" width="200" height="200" fill="none" stroke="#999"/>
    <line x1="0" y1="0" x2="80" y2="80" stroke="black"/>
    <rect x="80" y="80" width="100" height="100"  fill="yellow"/>
    <circle cx="100" cy="100" r="50" stroke="red" fill="none"/>
</svg>

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

---

## Formats de video/audio

<columns>
<column>

![](../images/analogic_numeric.png "Il existe une distinction entre les formats analogiques et les formats numériques.")

</column>
<column>

Un format vidéo décrit comment un dispositif envoie des images d’une vidéo à un autre dispositif, de la même manière
qu’un lecteur de DVD envoie des images à un téléviseur, ou un ordinateur à son moniteur.

</column>

</columns>

---

| Extension  | Type de document                            | MIME                    |
|------------|---------------------------------------------|-------------------------|
| .ogg       | OGG audio                                   | audio/ogg               |
| .ogv       | OGG video                                   | video/ogg               |
| .mp3       | MP3 audio                                   | audio/mpeg              |
| .mp4       | MP4 video                                   | video/mp4               |
| .avi       | AVI: Audio Video Interleave                 | video/x-msvideo         |
| .mid .midi | Musical Instrument Digital Interface (MIDI) | audio/midi audio/x-midi |

---

## Parlons d’encodage

Représentation d’une suite de caractères. Chaque caractère est stocké sous forme de nombre, et ce nombre se retrouve
dans une table de correspondance avec les-dits caractères pour afficher la lettre.

<reveal>

Il existe plusieurs tableaux d’encodage :

- ASCII
- ISO 8859
- Unicode
- ...

</reveal>

---

### ASCII 🆗

***American Standard Code** for **Information Interchange* - 1961**

Limité à 128 caractères, c’est le standard américain en informatique. La particularité c'est que chaque caractère tient
sur un byte. (c'est d'ailleurs ce qui a donné la taille de 8 bits à un byte).

![ascii Table](../images/ascii_table.png "Liste de tous les caractères ASCII")

---

### Windows-1252/ISO 8859 💩

Windows-1252 ou CP1252 est un jeu de caractères, utilisé historiquement par défaut sur le système d’exploitation
Microsoft Windows en anglais et dans les principales langues d’Europe de l’Ouest, dont le français.

<columns>
<column flex-1 reveal>

- ISO 8859-1 : Latin-1 Western European (1987)
- ISO 8859-2 : Latin-2 Central European (1987)
- ISO 8859-3 : Latin-3 South European (1988)
- ISO 8859-4 : Latin-4 North European (1988)
- ISO 8859-5 : Latin/Cyrillic (1988)
- ISO 8859-6 : Latin/Arabic (1987)
- ISO 8859-7 : Latin/Greek (1987)
- ISO 8859-8 : Latin/Hebrew (1988)
- … 1989, 1992,…
- ISO 8859-16 : Latin-10 South-Eastern European (2001)

</column>
<column flex-2>

![windows table](../images/windows_table.png "Tableau des caractères Windows-1252")

</column>
</columns>

---

### Unicode (ISO 10646) ❤️

Unicode est un standard informatique qui permet des échanges de textes dans différentes langues, à un niveau mondial. Il
est développé par le Consortium Unicode, qui vise au codage de texte écrit en donnant à tout caractère de n’importe quel
système d’écriture un nom et un identifiant numérique, et ce de manière unifiée, quels que soient la plateforme
informatique ou le logiciel utilisé.

Unicode peut être encodé sur 1 à 4 Bytes (UTF-8) - soit 1,112,064 de caractères.

<columns>
<column>

![unicode table](../images/utf8_table.png "Répartition des caractères Unicode")

</column>
<column>

- Chaque petit carrés représente 256 caractères,
- Chaque grand carrés représente 65536 caractères,
- En bleu les caractères déjà assignés,
- En blanc les espaces encore disponibles,
- En vert les caractères privés.

</column>
<column>

![utf8 usage](../images/utf8_wiki.png "Fréquence d'utilisation des caractères Unicode sur wikipedia, toutes langues confondues")

> [!IMPORTANT] Utilisez UTF-8

source : https://www.reedbeta.com/blog/programmers-intro-to-unicode/

</column>
</columns>

---

## Formats de donnée

> [!NOTE] Un format de données est une convention

---

### Format TXT

Le format **texte** est le format basique d’un fichier non binaire qui peut être lu par un humain. C’est le format le
plus simple, car basique, et contient directement les caractères.
Ce n'est pas un format optimisé pour les machines, mais il est simple à lire et à écrire.

MIME : `text/plain`

---

### Format de structure

Les formats de structures permettent de stocker de l’information structurée plus ou moins complexe.

> [!NOTE] Chaque format a ses **avantages et inconvénients**, et le choix du format dépend uniquement de **la complexité
de la donnée**.

---

### XML (eXtensible Markup Language)

XML est un format ancien créé en 1996 et publié par la W3C. C’est un langage Human-Readable👩‍🦱 et Machine-Readable 🤖 car
son objectif est de rester simple.

<columns>
<column>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<books>
    <book>
        <id>ASI01</id>
        <title>Foundation</title>
        <author>Isaac Asimov</author>
        <year>1951</year>
    </book>
</books>
```

</column>
<column>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<books>
    <book id="ASI01">
        <title>Foundation</title>
        <author id="37"/>
        <year>1951</year>
    </book>
</books>
```

</column>
</columns>

---

### CSV (Comma-Separated Values)

CSV est un format de données tabulaire dont les champs sont séparés par des virgules (`text/csv`).
Une variante au CSV est le TSV (Tab-separated Values `text/tab-separated-values`)

```
id,title,author,year
ASI01,Foundation,Isaac Asimov,1951
ASI02,Foundation and Empire,Isaac Asimov,1952
```

Sa variante TSV :

```
id  title  author  year
ASI01   Foundation  "Isaac Asimov"  1951
```

Et pour les cas complexes :

```
id,title,author,year
ADA01,"Life, the Universe and Everything","Douglas Adams",1982
```

| Avantages                           | Inconvénients                              |
|-------------------------------------|--------------------------------------------|
| Simple                              | Simple                                     |
| Facile à lire                       | **Ne permet pas les structures complexes** |
| Représentation en tableau naturelle |                                            |

---

### JSON (JavaScript Object Notation)

Format reprenant la structure javascript

```json
[
  {
    "id": "ASI01",
    "title": "Foundation",
    "author": "Isaac Asimov",
    "year": 1951
  },
  {
    "id": "ASI02",
    "title": "Foundation and Empire",
    "author": "Isaac Asimov",
    "year": 1952
  }
]
```

---

### YAML (Yet Another Markup Language)

YAML est un format léger de structure de données utilisé pour des fichiers de configuration entre autres.

<columns>
<column>

```yaml
books:
  - id: ASI01
    title: Foundation
    author: Isaac Asimov
    year: 1951 #Good Year btw.
  - id: ASI02
    title: Foundation and Empire
    author: Isaac Asimov
    year: 1952
```

</column>
<column>

```yaml
books:
  ASI01:
    title: Foundation
    author: Isaac Asimov
    year: 1951
  ASI02:
    title: "Foundation and Empire"
    author: Isaac Asimov
    year: 1952
```

</column>
</columns>

---

<columns>
<column>

```yaml
--- # Some separator
authors:
  "Isaac Asimov": &asimov
    firstname: Isaac
    lastname: Asimov
ASI01:
  title: Foundation
  author: *asimov
  year: 1951
  description: |
    Fondation est une chronique qui relate les 
    grandes crises auxquelles la petite planète
    Terminus devra faire face au fil des siècles,
    et des grandes figures  qui marqueront son 
    histoire dans l'ascension  de la Fondation 
    vers le destin que lui a dessiné Hari Seldon :
    devenir le berceau d'où naîtra le Nouvel Empire.
```

</column>
<column>

```yaml
--- ## YAML Example
ASI01:
  author:
    firstname: Isaac
    lastname: Asimov
  description: |-
    Fondation est une chronique qui relate les 
    grandes crises auxquelles la petite planète
    Terminus devra faire face au fil des siè...
  title: Foundation
  year: 1951
authors:
  "Isaac Asimov": { firstname: "Isaac" , lastname: "Asimov" }
```

</column>
</columns>

---

MIME : `application/x-yaml` ou `text/yaml` (⚠️ pas de standard international)

| Avantages | Inconvénients                   |
|-----------|---------------------------------|
| Simple    | Structure faible/erratique      |
| Complet   | Pas encore un standard W3C/ECMA |

Un site marrant qui explique pourquoi pas yaml : https://noyaml.com/

---

### TOML (Tom's Obvious, Minimal Language)

TOML est un format de fichier de configuration conçu afin d’être facile à lire et à écrire. La version 1.0.0 est sortie
le **12 Janvier 2021**.

```toml
[books]
# L'indentation est autorisée mais pas obligatoire
[books.ASI01]
title = "Foundation"
author = "Isaac Asimov"
year = 1951
```

MIME : `application/toml`

| Avantages | Inconvénients                                |
|-----------|----------------------------------------------|
| Simple    | Format peu pratique pour beaucoup de données |
|           | Pas encore un standard W3C/ECMA              |
|           | Très jeune et non adopté par tout le monde   |

---

### Les critères de choix d’un format

| Cas d’usage                      | XML | CSV | JSON | YAML | TOML |
|----------------------------------|-----|-----|------|------|------|
| Stockage plat (tableaux, listes) | ❌   | ✅ ✅ | ✅    | ❌    | ❌    |
| Stockage structuré               | ✅   | ❌   | ✅    | ❌    | ❌    |
| Configuration                    | ❌   | ❌   | ❌    | ✅    | ✅    |

---

## Format de présentation

Les formats de présentation sont des formats dont le but est de rendre une donnée finale de manière présentable et
lisible par un être humain.

> [!NOTE] Ces formats sont utilisés pour **restituer** l'information.

---

### HTML (HyperText Markup Language)

HTML (et ses dérivés, HTM, XHTML) est un format de présentation de la donnée interprétée par un navigateur web. C’est un
format simple qui est dérivé de XML, et qui a pour but de structurer des pages internet.

```html

<html>
<head>
    <title>Books</title>
</head>
<body>
<div id="ASI01">
    <h1>Foundation</h1>
    <h2>Isaac Asimov - 1951</h2>
    <p>Fondation est une <b>chronique</b> qui relate les grandes crises auxquelles la petite planète <i>Terminus</i>
        devra faire face au fil des siècles, et des grandes figures qui marqueront son histoire dans l'ascension de
        la Fondation vers le destin que lui a dessiné Hari Seldon : devenir le berceau d'où naîtra le Nouvel Empire.</p>
</div>
</body>
</html>
```

MIME : `text/html`

---

### **Markdown️**

MD est un format de mise en forme de texte simple et minimaliste. Ce cours est rédigé à 95 % en markdown.

```markdown
---   
title: Books
---   

# Foundation

## Isaac Asimov - 1951

Fondation est une **chronique** qui relate les grandes crises auxquelles
la petite planète _Terminus_ devra faire face au fil des siècles, et des
grandes figures qui marqueront son histoire dans l'ascension de la Fondation
vers le destin que lui a dessiné Hari Seldon : devenir le berceau d'où naîtra
le Nouvel Empire.
```

`MIME :text/markdown`

---

### LaTeX (`/ˈlɑːtɛx/` `LAH-tekh`) 1984 🧔🏻

LaTeX est un langage de présentation de données très utilisé dans le milieu académique.

<columns>
<column>

```latex
\documentclass{article}
\usepackage{hyperref}
\title{Fondation}
\author{Isaac Asimov}
\date{1951}
\begin{document}
\maketitle
Fondation est une \textbf{chronique} qui relate les grandes 
crises auxquelles la petite planète \textit{Terminus} devra 
faire face au fil des siècles, et des grandes figures qui  
marqueront son histoire dans l'ascension de la Fondation vers 
le destin que lui a dessiné Hari Seldon : devenir le berceau 
d'où naîtra le Nouvel Empire.
\end{document}
```

</column>
<column>

![LaTex rendered](../images/latex_rendered.png "Some LaTeX rendered")

</column>
</columns>

La grande force de LaTeX réside dans sa syntaxe mathématique

<columns>
<column>

```latex
\frac{n!}{k!(n-k)!} = \binom{n}{k}
```

</column>
<column>

![LaTex maths](../images/latex_maths.png "math formula example")

</column>
</columns>

---

### Les formats Office 💩

Office jusqu’en 2007 utilisait un format fermé propriétaire (.doc, .xls, .ppt).

En 2005, un nouveau standard a vu le jour, Office Open XML déployé pour la version 2007 de word/excel/…, qui est en
réalité un format XML archivé. (docx, xlsx, pptx)

MIME types :

- docx : `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- xlsx : `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- pptx : `application/vnd.openxmlformats-officedocument.presentationml.presentation`

🤮