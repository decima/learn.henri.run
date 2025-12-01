---
title: Annotations et Attributs
level: 5
type: 1_courses
description: Comprendre les annotations et attributs en PHP et leur utilisation dans Symfony.
cover: ../images/cover-5.png
hideTitle: true
hideCoverOnCourse: true
---

# **Annotations**

> En programmation, une annotation est un élément permettant d'ajouter des méta-données à un code source.
>
>
> En PHP, les annotations sont sur les classes, les méthodes, et les attributs
>

<aside>
⚠️ Know the difference ⚠️

</aside>

```php
/*
* Je suis un commentaire
* @Test
*/
private $property;
```

```php
/**
* Je suis une annotation
* @Test
*/
private $property;
```

En PHP, les annotations **ne sont pas supportées** par défaut dans le langage, on utilise en général une bibliothèque prévue pour cela.

Une annotation commence par un @ suivi du nom d'une classe. Si la classe est dans un namespace, il faut mettre un use classique dans la classe ou utiliser le chemin de déclaration complet.

Exemple :

```php
useDoctrine\ORM\MappingasORM;
/**
 *@Doctrine\ORM\Mapping\Entity()
 *@ORM\Table(name="mytable")
 */
classMyEntity{ }
```

---

Une annotation peut être posée sur une **classe**, une **méthode** ou une **propriété** d’un objet

```php
/**
*
* Annotation sans argument :
* @Foo()  
*
* Annotation avec son argument principal :
*
* @Bar("arg1")
*
* Annotation avec une suite d'arguments : 
*
* @Person(name="henri", age=31, hair=null)
*/
class MaClass{
...
```

---

# À quoi ça sert ?

- les routes dans Symfony sont déclarées en annotation
- les validateurs de formulaire
- la déclaration des entity

---

# ⚡ PHP 8 ⚡

PHP 8 intègre nativement le système d'annotations via des **attributs**.

C'est le même concept :

```php
class PostsController
{
    /**
     * @Route("/api/posts/{id}", methods={"GET"})
     */
    public function get($id) { /* ... */ }
}
```

```php

class PostsController
{
    #[Route("/api/posts/{id}", methods: ["GET"])]
    public function get($id) { /* ... */ }
}
```

---

## Comment les utiliser ?

Pour les annotations, il faut utiliser une bibliothèque tierce comme **Doctrine Annotations**.
Pour les attributs, ils sont natifs dans PHP 8, il suffit de les définir et de les lire via la réflexion.
Voici un exemple d'attribut personnalisé :

```php
#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD)]
class MyCustomAttribute
{
    public function __construct(public string $name, public int $value) {}
}
``` 

On peut ensuite l'utiliser comme ceci :

```php
#[MyCustomAttribute(name: "example", value: 42)]
class MyClass
{
    #[MyCustomAttribute(name: "methodExample", value: 7)]
    public function myMethod() {}
}

```

Pour lire les attributs, on utilise la réflexivité :

```php
$reflectionClass = new ReflectionClass(MyClass::class);
$attributes = $reflectionClass->getAttributes(MyCustomAttribute::class);
foreach ($attributes as $attribute) {
    $instance = $attribute->newInstance();
    echo $instance->name; // affiche "example"
}
```