---
title: Neo4j
description: Une base de données orientée graphes.
cover: ../images/neo4j_cover.jpg
type: 1_courses
level: 4
---

Neo4J (se lit *NEO FOR J*) (2007) est une base de données **Graphe** développé par la société éponyme. elle est **ACID**
et dispose d'une version open-source "Community".

Neo4j Offre un système de stockage basé sur des **nodes** (noeuds) et des **relations** (liens) entre ceux-ci. Neo4J
utilise un language nommé Cypher.


---

Exemple de requête

```SQL
MATCH (charlie:Person {name:'Charlie Sheen' })-[:ACTED_IN]-(movie:Movie)
RETURN movie
```

---

## Qui s’en sert?

- Ebay
- Airbus
- Volvo, Toyota,…
- Verizon, Orange, AT&T

---

## Vocabulaire

### Node

Un nœud de données

### Relationship

Lien entre les nœuds

### Properties

Les propriétés peuvent être attachées à des **nœuds** et à des **relations**.

---

# Noeuds

<columns>
<column>

## Créer un noeud

```sql
CREATE
(n:Person:Teacher {firstname: "Henri", lastname: "LARGET"})
```

## Modifier un noeud

```sql
MATCH (n:Teacher ) WHERE id(n) = 5 SET n.firstname="Bob"
```

</column>
<column>

## Supprimer un noeud

```sql
MATCH(n {firstname: "Henry"}) delete
n
```

## Récupérer un noeud

```sql
MATCH(n:Person {firstname: "Henri"}) return n
```

</column>
</columns>

https://neo4j.com/developer/cypher/intro-cypher/

---

La force de ce système c’est la relation, on obtient une représentation plus intuitive de la donnée, qui du coup est
plus simple à comprendre et moins lourd pour les requêtes. 