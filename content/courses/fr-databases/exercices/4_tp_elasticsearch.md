---
title: TP - Elasticsearch
type: 2_exercise
level: 4
---

## Exercice 1

### Insertion de données

#### Créez un index `prenom_students` avec le mapping suivant :

- `fullname` : type `text`
- `birthdate` : type `date`
- `gender` : type `keyword`
- `eye_color` : type `keyword`
- 'height_cm' : type `integer`

#### Ajoutez les documents suivants :

```json lines
{
  "fullname": "Alice Dupont",
  "birthdate": "1995-06-15",
  "gender": "F",
  "eye_color": "blue",
  "height_cm": 165
}
{
  "fullname": "Bob Martin",
  "birthdate": "1992-09-23",
  "gender": "M",
  "eye_color": "green",
  "height_cm": 175
}
{
  "fullname": "Charlie Durand",
  "birthdate": "1990-12-01",
  "gender": "M",
  "eye_color": "brown",
  "height_cm": 180
}
{
  "fullname": "Diane Moreau",
  "birthdate": "1993-03-30",
  "gender": "F",
  "eye_color": "hazel",
  "height_cm": 170
}
{
  "fullname": "Eva Bernard",
  "birthdate": "1994-11-05",
  "gender": "F",
  "eye_color": "blue",
  "height_cm": 160,
}
{
  "fullname": "Alice Cooper",
  "birthdate": "1948-02-04",
  "gender": "M",
  "eye_color": "green",
  "height_cm": 178
}

{
  "fullname": "Charlie Chaplin",
  "birthdate": "1889-04-16",
  "gender": "M",
  "eye_color": "brown",
  "height_cm": 165
}
{
  "fullname": "Diane Keaton",
  "birthdate": "1946-01-05",
  "gender": "F",
  "eye_color": "hazel",
  "height_cm": 170
}
{
  "fullname": "Eve Adams",
  "birthdate": "1974-02-06",
  "gender": "F",
  "eye_color": "blue",
  "height_cm": 162
}
```

### Utiliser les données

#### Effectuez les recherches suivantes :

- Trouvez tous les documents où le prénom est "Alice".
- Trouvez tous les documents où le genre est "F".
- Trouvez tous les documents où la date de naissance est après le 1er janvier 1993.
- Trouvez tous les documents où le nom complet commence par "D".
- Trouvez tous les documents où le prenom est "Charlie" et le genre est "M".
- En autorisant les fautes de frappes, trouvez tous les documents où le prénom est "Eve".

#### Agrégations

- Comptez le nombre de documents par genre.
- Trouvez la date de naissance la plus ancienne.
- Trouvez la date de naissance la plus récente.
- Trouvez la taille moyenne, minimale et maximale des étudiants dans la même requête.
- Trouvez le nombre d'étudiants par couleur des yeux.
- Trouvez le nombre d'étudiants par décennie de naissance (ex: 1990-1999, 2000-2009, etc.).
- Trouvez le nombre d'étudiants par tranche de taille (ex: 150-159 cm, 160-169 cm, etc.).

## Exercice 2

Pour cet exercice, vous allez utiliser l'index `festivals`.
L'index `festivals` contient des documents avec les champs suivants :

1. Quels sont les festivals dont le nom contient le mot "Rock" ?
2. Lister les festivals de Musique qui se déroulent dans le département de la Gironde
3. Trouver les festivals qui ont été créés entre 1980 et 1990 (inclus).
4. Quels sont les festivals situés à moins de 100 kilomètres d'Annecy (coordonnées approx. 45.904775, 6.124210) ?
5. Afficher les festivals de la région Bretagne qui n'ont pas de site web renseigné.

Aggrégations (Chaque question doit être réalisée avec une seule requête) :

6. Quel est le top 10 des disciplines principales ayant le plus de festivals ?
7. Quelle est l'année de création du plus ancien festival répertorié dans la base de données ?
8. Pour la discipline principale Musique, quelle est la répartition des festivals par sous-catégorie ?
9. Pour chaque région, quelles sont les statistiques sur l'année de création des festivals (le plus ancien, le plus
   récent et la moyenne) ?
10. Pour chaque discipline principale, quel est le festival le plus récemment créé ? Affichez son nom et son année de
    création.
11. En partant du centre de Paris (coordonnées approx. latitude 48.85, longitude 2.35),
    combien de festivals trouve-t-on dans les cercles de distance suivants :
    - Moins de 100 km
    - Entre 100 et 250 km
    - Entre 250 et 500 km
    
    Et pour chaque cercle, quelle est la répartition des disciplines principales des festivals ?
