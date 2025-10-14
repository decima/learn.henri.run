---
title: Conclusion
description: Une base de données optimisée pour la recherche full-text
cover: ../images/conclusion_cover.jpg
type: 1_courses
level: 6
---

## Un petit point sur les solutions vues en cours

|                                                     | Redis | PostgreSQL | MongoDB | Elasticsearch | Neo4J |
|-----------------------------------------------------|-------|------------|---------|---------------|-------|
| Gestion de caches                                   | ✅  ✅  | ❌          | ❌       | ❌             | ❌     |
| Gérer des relations entre documents                 | ❌     | ✅          | ❌       | ❌             | ✅  ✅  |
| Autoriser des structures hétérogènes entres entrées | ✅     | ❌          | ✅  ✅    | ☑️            | ☑️    |
| Complètement gratuit                                | ✅  ✅  | ✅  ✅       | ✅       | ❌             | ❌❌    |
| Recherche Fulltext                                  | ❌     | ✅          | ❌       | ✅  ✅          | ❌     |
| Requière peu de ressources pour tourner             | ✅     | ❌          | ❌       | ❌             | ❌     |
| Propriété nestées                                   | ❌     | ☑️         | ✅  ✅    | ✅  ✅          | ❌     |

- Durant les différents TPs vous avez utilisé mon serveur dédié avec mes instances, mais existe-t-il des solutions pas
  cher/gratuites en ligne ?

---

| Solution                                                                          | Propose une version gratuite | Limitations en gratuit                                  | Prix                          |
|-----------------------------------------------------------------------------------|------------------------------|---------------------------------------------------------|-------------------------------|
| [mongodb Atlas](https://www.mongodb.com/atlas/database)                           | oui                          | 500Mb                                                   | 2Gb : 9$/mois, 5GB : 25$/mois |
| [Neo4J AuraDB](https://neo4j.com/pricing/)                                        | oui                          | 200k noeuds, et 400k relations                          | 65$/mois                      |
| [Redis.com](https://redis.com/redis-enterprise-cloud/pricing/)                    | oui                          | 30Mb de ram, une base dédiée, 30 connexions simultanées | à partir de 7$/mois           |
| [Heroku PostgreSQL](https://elements.heroku.com/addons/heroku-postgresql#pricing) | oui                          | 1Go, 10 000 lignes                                      | à partir de 9$/mois           |
| Elasticsearch [searchly](http://www.searchly.com/)                                | oui                          | 20Mb                                                    | à partir de 9$/mois           |
| [Elasticsearch Cloud](https://www.elastic.co/cloud/)                              | non                          | trial 14 jours                                          | à partir de 95$/mois ****😱   |

Et sinon...

---

la solution alternative consiste à installer docker sur un serveur et à faire tourner dessus les différentes bases

| Provider     | Prix mini | Specs             |
|--------------|-----------|-------------------|
| OVH          | 7€        | 2Go RAM, 40Go SSD |
| Scaleway     | 8€        | 2Go RAM, 20Go     |
| DigitalOcean | 12$       | 2Go RAM, 50Go SSD |

[henri.run/r/tTL](https://henri.run/r/tTL)


---

**Et les autres ?**

Le module n’est pas assez long donc il a fallu faire des choix. Les laissés pour contre qu’on n’a pas aborder, et qui
seront étudiés très rapidement ici :

- XML 🤔
- InfluxDB

---

## XML

XML n’est pas une base de données à proprement parler mais un format vu *lors du cours de Structures de données.*

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<catalog>
    <cd>
        <title lang="FR">Empire Burlesque</title>
        <artist>Bob Dylan</artist>
        <country>USA</country>
        <company>Columbia</company>
        <price>10.90</price>
        <year>1985</year>
    </cd>
    <cd>
        <title lang="EN">Hide your heart</title>
        <artist>Bonnie Tyler</artist>
        <country>UK</country>
        <company>CBS Records</company>
        <price>9.90</price>
        <year>1988</year>
    </cd>
    <cd>
        <title lang="EN">Greatest Hits</title>
        <artist>Dolly Parton</artist>
        <country>USA</country>
        <company>RCA</company>
        <price>9.90</price>
        <year>1982</year>
    </cd>
</catalog>
```

Mais par certains cotés, XML offre :

---

Une structure de données via le format XSD (XML Schema Definition)

```xml
<?xml version="1.0" encoding="utf-8"?>
<!-- Created with Liquid Technologies Online Tools 1.0 (https://www.liquid-technologies.com) -->
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified"
           xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="catalog">
        <xs:complexType>
            <xs:sequence>
                <xs:element maxOccurs="unbounded" name="cd">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="title">
                                <xs:complexType>
                                    <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                            <xs:attribute name="lang" type="xs:string" use="required"/>
                                        </xs:extension>
                                    </xs:simpleContent>
                                </xs:complexType>
                            </xs:element>
                            <xs:element name="artist" type="xs:string"/>
                            <xs:element name="country" type="xs:string"/>
                            <xs:element name="company" type="xs:string"/>
                            <xs:element name="price" type="xs:decimal"/>
                            <xs:element name="year" type="xs:unsignedShort"/>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

---

Un langage de mise en forme XSLT (eXtensible Stylesheet Language)

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2>My CD Collection</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Country</th>
                        <th>Company</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                    <xsl:for-each select="catalog/cd">
                        <tr>
                            <td>
                                <xsl:value-of select="title"/>
                            </td>
                            <td>
                                <xsl:value-of select="artist"/>
                            </td>
                            <td>
                                <xsl:value-of select="country"/>
                            </td>
                            <td>
                                <xsl:value-of select="company"/>
                            </td>
                            <td>
                                <xsl:value-of select="price"/>
                            </td>
                            <td>
                                <xsl:value-of select="year"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
```

---

Un langage de requêtes avec XPath

- Tous les éléments enfant de catalogue :  `/catalog/*`
- 2ème “cd” de catalog : `/catalog/cd[2]`
- Tous les éléments title : `/catalog/cd/title`
- Tous les élément title où qu’ils soient : `//title`
- Tous les contenus de title où qu’ils soient, en filtrant pour l’attribut lang = “FR” `//title[@lang='FR']/text()`
- La somme de tous les éléments price où qu’ils soient dans catalog `sum(/catalog//price)`

---

## InfluxDB (Time-series Database - TSDB)

Une Time-series Database est une base de données temporelle

InfluxDB (2013) est une base de donnée de séries temporelles (TSDB).

Une TSDB est une base qui permet d'enregistrer ou récupérer des données associées à un**`timestamp`**.

Très souvent ces bases de données sont utilisées dans la surveillance de valeurs comme la météo, le cours d'une devise,
ou encore l'usage de ressources sur un serveur.

### Qui l'utilise ?

Trivago, Indeed, Adobe, Axa, Cisco,Ebay,Oracle, Paypal

---

### Termes

- **Bucket**

  Un Bucket est l'équivalent d'une base de données, c'est un ensemble de mesures.

> Dans le cadre de surveillance d'un ordinateur on pourrait l'appeler **Monitoring**

- **Measure**

  Une mesure c'est un ensemble de points qui se rapporte à une même donnée.

> Pour du **monitoring**, on peut prendre comme example l'usage de la mémoire **memory**.

- **Point**

  Un point représente un ensemble de champs et de tags à un instant donné.

> Pour notre mesure **memory**, on parlera du point du **24 octobre 2023 à 08:47:21.322**

- **Field**

  Un champ est une clé valeur pour un point pour une mesure donnée

> Notre point **memory** du **24 octobre 2023 à 08:47:21.322** contient le champ `memory_free: 4Go`
> `memory_allocated: 3Go` `memory_used: 27Go`

- **Tag**

  Un tag représente une valeur textuelle associée à un point pour permettre de filtrer certaines valeurs

> Notre point **memory** du **24 octobre 2021 à 08:47:21.322** fait partie du serveur **SERVER_A**. on ajoute donc un
> tag `hostname: SERVER_A`.

---

### Cas d’usage

- Pourquoi utiliser une TSDB
    - Lorsque le temps a une réelle importance
    - Lorsqu'on a besoin de stocker rapidement une donnée temporalisée.
    - Pour mesurer une évolution


---

<columns>
<column>

## …et autres

Voici la liste des bases de données populaires :

- Apache Cassandra (noSQL)
- Google BigQuery (colonne)
- CouchDB (noSQL)
- ArangoDB (graph)

</column>
<column>

![https://db-engines.com/en/ranking](../images/rankings.png)
https://db-engines.com/en/ranking

</column>
</columns>

---

# henri.run/r/OTc
{{<myqr code="https://henri.run/r/OTc" >}}
