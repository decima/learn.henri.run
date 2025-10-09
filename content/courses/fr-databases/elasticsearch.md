---
title: Elasticsearch
description: Une base de données NoSQL orientée document.
cover: ../images/elasticsearch_cover.jpg
type: 1_courses
level: 4
---


Elasticsearch (2011) est une base de données No-SQL orienté Document, mais c'est avant tout un moteur d'**indexation**
et de recherche basé sur Apache Lucene (1999).

Elasticsearch offre des fonctionnalités de recherche **full-text** avec une interface **HTTP** et des documents au
format **sans schema**. (attention néanmoins aux types, contrairement à MongoDB).

Elasticsearch est un logiciel Open-Source fait par l'entreprise [Elastic.co](https://www.elastic.co/fr/) et fait
intégralement partie de la stack **ELK** (Elastic, Logstash, Kibana).

- Logstash : **ETL** avec une syntaxe Ruby.
- Kibana : Interface graphique
- Beats : Outil de transfert d'information (E de l'ETL)

---

## C'est quoi un ETL ??? 🤔

<reveal>

- Extract, Transform, Load
- **Outil d'extraction de donnée, de mise en forme et de chargement vers d'autres systèmes.**

</reveal>

---

## Qui utilise Elasticsearch ?

Uber, Ebay, Github, Orange, Airbus, Walmart, Le ministère des
armées [et pleins d'autres...](https://www.elastic.co/fr/customers/)


---

## Protocol de communication

Elasticsearch à mis en place une interface de communication basée sur le **protocole HTTP** communément appelé **REST**.

> Il suffit donc de faire une requête HTTP vers Elasticsearch pour interagir avec. Donc pas besoin de bibliothèques
> Elasticsearch, juste savoir faire une requête HTTP dans le language de votre choix.
>
>
> en cas d'oubli, voici une ressource sur [protocole HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Overview) ⬅️
>
> Et j'ai même [un cours](https://courses.larget.fr/2020-2021/dim/php/courses/3-http/#1) ⬅️
>
>

---

## Exemple de requêtes

Pour récupérer les informations d'un serveur serveur Elasticsearch, il suffit de faire…

```
GET /
```

```json
    {
  "name": "04059128e133",
  "cluster_name": "docker-cluster",
  "cluster_uuid": "monTMVKkR4-b5fDXuzt_MA",
  "version": {
    "number": "8.4.2",
    "build_flavor": "default",
    "build_type": "docker",
    "build_hash": "89f8c6d8429db93b816403ee75e5c270b43a940a",
    "build_date": "2022-09-14T16:26:04.382547801Z",
    "build_snapshot": false,
    "lucene_version": "9.3.0",
    "minimum_wire_compatibility_version": "7.17.0",
    "minimum_index_compatibility_version": "7.0.0"
  },
  "tagline": "You Know, for Search"
}
```

---

## Quelques termes techniques

### Index

Collection de documents définis sous une même structure

### Document

Entrée dans la base de données.

### Shard / Replica

Sous-tâches qui travaillent à la recherche/sauvegarde de données. Shard : Travailleur Principal, Replica : Travailleur
de secours.

### Mapping

Structure qui défini les règles de l'index : Quels champs sont autorisés, lesquels ne le sont pas, et comment il sont
analysés.

Pour faciliter ce cours, on ne parlera pas de mapping, ni d'analyzers, Lexers, Stemmers,...

---

## Requêtes simples

<columns>
<column>

### Créer un document

Si l'index n'existe pas, il est créé automatiquement avec un mapping par défaut.

```
POST /mon_index/_doc
{
  "content": "Voyez ce koala fou qui mange
   des journaux et des photos dans un bungalow.",
  "type": "pangram",
  "age": 27
}
```

```json
{
  "_index": "mon_index",
  "_type": "_doc",
  "_id": "AZl1THwBoGN1g7oxL3LY",
  "_version": 1,
  "result": "created",
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "_seq_no": 0,
  "_primary_term": 1
}
```

</column>
<column>

### Créer/modifier un document avec un id

```
PUT / mon_index / _doc / 42
{
    "content"
:
    "Hier, au zoo, j'ai vu dix guépards, cinq zébus, 
    un yak et le wapiti fumer.",
        "type"
:
    "pangram",
        "age"
:
    31
}
```

```json
{
  "_index": "mon_index",
  "_type": "_doc",
  "_id": "42",
  "_version": 1,
  "result": "created",
  ...
}
```

</column>
</columns>

### Supprimer un document

```
DELETE / mon_index / _doc / 42
```

```json
{
  "_index": "mon_index",
  "_type": "_doc",
  "_id": "42",
  "_version": 4,
  "result": "deleted",
  ...
}
```

---

## Effectuer une recherche sur un index


<columns>
<column>

```
GET /mon_index/_search?size=100
{
  "query": {
    "match_all": {}
  }
}
```

</column>
<column>

```
GET /mon_index/_search?size=100
{
  "query": {
    "term": {
      "type": "pangram"
    }
  }
}
```

</column>
</columns>

- [Search API](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html)
- [Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html)
- [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations.html)

---

```json
{
  "took" : 388,
  "timed_out" : false,
  "_shards" : {
    "total" : 1,
    "successful" : 1,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : {
      "value" : 19,
      "relation" : "eq"
    },
    "max_score" : 1.0,
    "hits" : [
      {
        "_index" : "mon_index",
        "_type" : "_doc",
        "_id" : "ApmETHwBoGN1g7oxB3Jw",
        "_score" : 1.0,
        "_source" : {
          "content" : "Voyez ce koala fou qui mange des journaux et des photos dans un bungalow.",
          "type" : "pangram",
          "age" : 27
        }
      }
      ...
```

---

# Cas d’usage

- Dans quels cas utilise-t-on Elasticearch?
    - Lorsque on a pas besoin de relation entre différentes entrées
    - Lorsqu’on a un élément principal et des informations attachées à ces documents
    - Lorsqu'on veut faire de la recherche fulltext