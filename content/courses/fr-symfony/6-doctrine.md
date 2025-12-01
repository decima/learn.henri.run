---
title: Doctrine DBAL et ORM
level: 6
type: 1_courses
description: Introduction à Doctrine DBAL et ORM, deux composants essentiels pour la gestion des bases de données.
cover: ../images/cover-6.png
hideTitle: true
hideCoverOnCourse: true
---

Doctrine-Project est une suite de bibliothèques dont la fonction première est la manipulation de données de base de
données.

<columns>
<column flex-2>

Doctrine **DBAL** (DataBase Abstraction Layer) et Doctrine **ORM** (Object Relational Mapper).

On distingue 2 projets Doctrine :

**Qu'est-ce qu'un ORM ?**

> [!NOTICE] Définition wikipedia
> 📚 Un mapping objet-relationnel (en anglais object-relational mapping ou ORM) est un type de programme informatique qui
> se place en **interface** entre un programme **applicatif** et une **base de données** relationnelle pour simuler une
> base de
> données orientée objet.
>
>
>
> Ce programme définit **des correspondances** entre les **schémas** de la base de données et les **classes** du
> programme
> applicatif. On pourrait le désigner par là, « comme une couche d'abstraction entre le monde objet et monde
> relationnel ».

</column>
<column>

![](../images/doctrine-project.png)

</column>
</columns> 

---

## Entities

<columns>
<column>

Les entités Doctrine se déclarent par des attributs (ou annotations).

L'entité est une classe qui, une fois instanciée, représente une entrée dans la base de données.

Prenons par exemple la classe User. Les conventions de nommage nous dit de stocker l'entité dans un dossier **Entity**.

Pour la suite, imaginons que les propriétés ont toutes des getters/setters déclarés. Id n'a pas de setter.

</column>
<column>

```php
namespace App\Entity;
use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;

class User
{
    private ?int $id = null;
    private ?string $name = null;
    private ?int $age = null;
    private ?\DateTimeImmutable $createdAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }
```

</column>
<column>

```php
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: "integer")]
    private ?int $age = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

...
}

```

</column>
</columns>

---

En exécutant la requête de création/mise à jour du schéma de la base (dans cet exemple SQLite), on obtient le code
suivant :

```sql
CREATE TABLE "user"
(
    id         INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name       VARCHAR(255) NOT NULL,
    age        INTEGER      NOT NULL,
    created_at DATETIME     NOT NULL --(DC2Type:datetime_immutable)
);
```

Si on souhaite supprimer une table, il suffit de supprimer son entité et de détacher les différents liens avec la table
en question.

---

## Types Existants

Une liste des types que l'on peut utiliser en temps que type de colonne :

<columns>
<column>

### Types principaux

- string
- text
- boolean
- integer (or smallint, bigint)
- float
- enum

### Date/Time Types

- datetime (datetime_immutable)
- datetimetz (datetimetz_immutable)
- date (date_immutable)
- time (time_immutable)
- dateinterval

</column>
<column>

### Tableaux/Objets

- array (or simple_array)
- json

### Other Types

- ascii_string
- decimal
- guid

</column>
</columns>

---

## Relations

<columns>
<column>

Avant de continuer, on va créer une entité Post avec ses getters/setters :

```php
#[ORM\Entity()]
class Post
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;
}
```

</column>
<column>

Un post a un auteur, et un auteur peut publier plusieurs posts. Dans la classe Post on va ajouter une propriété nommée
author.

```php
...
#[ORM\ManyToOne(inversedBy: 'posts')]
#[ORM\JoinColumn(nullable: false)]
private ?User $author = null;

public function getAuthor(): ?User
{
    return $this->author;
}

public function setAuthor(?User $author): self
{
    $this->author = $author;
    return $this;
}
```

</column>
</columns>

---

> [!IMPORTANT] À partir de maintenant, nous ne travaillons **pas avec des Id** mais **uniquement avec des entités**

---

Si on récupère un Post, en appelant la méthode **getAuthor()**, on obtiendra un objet de type User.

Mais on aimerait récupérer tous les Posts d’un utilisateur aussi simplement :

```php
#[ORM\OneToMany(mappedBy: 'author', targetEntity: Post::class, orphanRemoval: true)]
private Collection $posts;

public function __construct()
{
    $this->posts = new ArrayCollection();
}

public function getPosts(): Collection
{
    return $this->posts;
}

public function addPost(Post $post): self
{
    if (!$this->posts->contains($post)) {
        $this->posts->add($post);
        $post->setAuthor($this);
    }

    return $this;
}
```

---


On peut également rajouter 2 méthodes pour se faciliter la vie :

<columns>
<column>

```php
public function addPost(Post $post): self
{
    if (!$this->posts->contains($post)) {
        $this->posts->add($post);
        $post->setAuthor($this);
    }
    return $this;
}
```

</column>
<column>

```php
public function removePost(Post $post): self
{
    if ($this->posts->removeElement($post)) {
        // set the owning side to null (unless already changed)
        if ($post->getAuthor() === $this) {
            $post->setAuthor(null);
        }
    }
    return $this;
}
```

</column>
</columns>


En exécutant la mise à jour de la base, les requêtes exécutées sont les suivantes :

```sql
CREATE TABLE post
(
    id        INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    author_id INTEGER      NOT NULL,
    title     VARCHAR(255) NOT NULL,
    content   CLOB         NOT NULL,
    CONSTRAINT FK_5A8A6C8DF675F31B
        FOREIGN KEY (author_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE
);

CREATE INDEX IDX_5A8A6C8DF675F31B ON post (author_id);
```

---

En continuant sur cet exemple, on dira qu’un Post peut être liké par plusieurs utilisateurs, qui eux-même peuvent liker
plusieurs posts.

<columns>
<column>

**Entité User**

```php
#[ORM\ManyToMany(targetEntity: Post::class, mappedBy: 'likers')]
private Collection $likes;

public function __construct()
{
    $this->posts = new ArrayCollection();
    $this->likes = new ArrayCollection();
}

public function getLikes(): Collection
{
    return $this->likes;
}

public function addLike(Post $post): self
{
    if (!$this->likes->contains($post)) {
        $this->likes->add(post);
        $post->addLiker($this);
    }

    return $this;
}

public function removeLike(Post $post): self
{
    if ($this->likes->removeElement($post)) {
        $post->removeLiker($this);
    }

    return $this;
}
```

</column>
<column>

**Entité Post**

```php
#[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'likes')]
private Collection $likers;

public function __construct()
{
    $this->likers = new ArrayCollection();
}

public function getLikers(): Collection
{
    return $this->likers;
}

public function addLiker(User $user): self
{
    if (!$this->likers->contains($user)) {
        $this->likers->add($user);
    }

    return $this;
}

public function removeLiker(User $user): self
{
    $this->likers->removeElement($user);

    return $this;
}
```

</column>
</columns>

---

```sql
CREATE TABLE post_user
(
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY (post_id, user_id),
    CONSTRAINT FK_44C6B1424B89032C
        FOREIGN KEY (post_id)
            REFERENCES post (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE,
    CONSTRAINT FK_44C6B142A76ED395
        FOREIGN KEY (user_id)
            REFERENCES "user" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE
);

CREATE INDEX IDX_44C6B1424B89032C ON post_user (post_id);
CREATE INDEX IDX_44C6B142A76ED395 ON post_user (user_id);
```

![](../images/db-post-users.png)

---

> [!IMPORTANT] On parle des objets et de leurs relations entre eux.
_et non de tables et d'entrées. C'est la puissance de l'**ORM**._

Exemple :

```php
$user = new User();
$user->setName("Henri");
$user->setAge(33);
$user->setCreatedAt(new \DateTime());

$post = new Post();
$post->setTitle("Cours de Symfony")
		 ->setContent("Some awesome content is coming")
     ->setAuthor($user);

$users = $post->getLikers();
```

---

## Manipulation d’entités

La manipulation des entités se fait via l'entityManager **`Doctrine\ORM\EntityManagerInterface`**.

Cet objet a 4 méthodes indispensables (et pleins d’autres dont on ne parlera pas) :

- **`persist($entity)`**
- **`remove($entity)`**
- **`flush()`**
- **`getRepository($entityClassName)`**

---

### Chargement des données

Un Repository est une classe liée directement au modèle. Dans les conventions de code, elle se nomme **NomdeLEntite**
Repository et se trouve dans un dossier Repository.

```php
#[ORM\Entity(repositoryClass: UserRepository::class)]
```

Le Repository doit hériter de la classe : `Doctrine\ORM\EntityRepository`

```php
namespace App\Repository;

use Doctrine\ORM\EntityRepository;

class UserRepository extends EntityRepository
{
}
```

Une fois le lien fait entre entité et repository, on peut récupérer le repository de cette manière :

```php
$repository = $entityManager->getRepository(User::class);
```

---

La classe parente est équipée de 4 méthodes pratiques :

```php
$repository->findAll(); //renvoie toute la table
$repository->find($id); //récupère l'entité par son id
$repository->findBy(["field"=>"value"]); 
//récupère des entités par un ou plusieurs champs.
$repository->findOneBy(["field"=>"value"]);
```

Par exemple :

```php
$me = $repository->findOneBy(["id"=>1]);
```

Pour plus de souplesse, on peut définir nos propres méthodes dans le Repository et utiliser le Query Builder - Dans les
cas où les fonctions de base ne suffisent pas.

```php
public function findByAuthorAge(int $age)
{
    return $this->createQueryBuilder('p')
        ->join("p.author", "a")
        ->where("a.age = :age")
        ->setParameter("age", $age)
        ->getQuery()
        ->getResult();
}
```

---

### Editer

Pour modifier une entité existante, il faut d’abord la récupérer puis la modifier en utilisant les setters :

```php
$repository = $entityManager->getRepository(User::class);
$me = $repository->find(1);
$me->setAge(32);
```

> [!CAUTION] Les modifications ont été prises en compte par Doctrine automatiquement **mais pas par la base de données**

---

## Ajouter

Lors de la création d'un objet de type Entity, cet objet n'est pas reconnu par Doctrine. La méthode de liaison est la
méthode**`persist()`**

```php
$user = new User();
$user->setName("Henri");
$user->setAge(31);
$user->setCreatedAt(new \DateTime());
$entityManager->persist($user);
.
```

> [!CAUTION] L’objet est maintenant pris en compte par Doctrine **mais pas par la base de données**

---

## Supprimer

Pour supprimer une entité, il faut la récupérer puis dire à l'entity manager de la supprimer.

```php
$repository = $entityManager->getRepository(User::class);
$me = $repository->find(1);

$entityManager->remove($me);
```

> [!CAUTION] La suppression est enregistrée par Doctrine **mais pas par la base de données**

---

## Mettre à jour la base de données

Une fois les changements effectués sur les entités, il faut appliquer ses modifications, en appelant la méthode :

```php
$entityManager->flush();
```