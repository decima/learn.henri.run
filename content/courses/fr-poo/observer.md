---
title: Design patterns - Local newsletter
type: 1_exercise
level: 1
---

## 1 - Les nouvelles

Créer un enum `App\NewsType` de type `string` qui aura les 3 valeurs suivantes :

- `Politics`
- `Sports`
- `International`

Créer ensuite une classe `App\News`, cette classe aura 3 propriétés publiques readOnly :

- title: `string`
- content: `string`
- type: `App\NewsType`

Qui seront définies au constructeur, **déclaré en privé**.

Enfin, créer 3 méthodes statiques :

```
public static function CreateAboutPolitics(string $title,string  $content): App\News
public static function CreateAboutSports(string $title,string  $content): App\News
public static function CreateAboutInternational(string $title,string  $content): App\News
```

Enfin, on va créer un tableau mélangé de news comme suit :

- 3 news de Politiques
- 2 news sports
- 4 news relations internationales.

```php
$news = [
    News::CreateNewsAboutPolitics("La politique locale en ébullition", "Les débats s'intensifient avant les prochaines élections."),
    News::CreateNewsAboutSports("Victoire éclatante de l'équipe locale", "Un match mémorable pour les fans de football."),
    News::CreateNewsAboutInternational("Sommet mondial sur le climat", "Des accords importants ont été signés pour l'avenir de la planète."),
    News::CreateNewsAboutPolitics("Débats parlementaires tendus", "L'opposition demande de nouvelles réformes économiques."),
    News::CreateNewsAboutSports("Nouveau record battu !", "Un athlète local a dépassé toutes les attentes."),
    News::CreateNewsAboutInternational("Crise diplomatique en cours", "Des tensions croissantes entre deux nations voisines."),
    News::CreateNewsAboutPolitics("Élections primaires approchent", "Les candidats multiplient les meetings à travers le pays."),
    News::CreateNewsAboutInternational("Traité de paix signé", "Un accord historique met fin à des décennies de conflit."),
    News::CreateNewsAboutInternational("Découverte archéologique majeure", "Un site ancien révèle des secrets insoupçonnés."),
]
```

## 2 - Abonnés

### 2.1 - L'interface

Créer une interface nommée `App\SubscriberInterface`. Cette interface déclarera une méthode `update`
qui prendra en paramètres une `News` et ne renverra pas de valeur.

### 2.2 - L'abonné

Créer une classe `App\UserSubscriber` qui représentera l'abonné au journal.
Cette classe aura un `name` qui sera publiquement déclarée et devra implémenter l'interface `SubscriberInterface`.

La méthode devra afficher lors de l'appel à l'update le message suivant :

``` 
{{NAME}} a lu la nouvelle : {{TITLE}} - {{TYPE}}
```

On va ensuite créer 3 abonnés : 
- Pierre
- Florent
- Charles

## 3 - L'agence de presse

### 3.1 - L'interface
Créer une interface `App\NewsEmitter` qui aura 3 méthodes publiques : 
- `registerSubscriber` qui prendra un `SubscriberInterface` en paramètres.
- `removeSubscriber` qui prendra également une `SubscriberInterface` en paramètres.
- `notifySubscribers` qui prendra une `News` en paramètre.


### 3.2 - L'agence

Créer une classe `App\NewsAgency` qui implémente l'interface `App\NewsEmitter`.
Cette classe devra gérer un tableau d'abonnés. A l'appel de notifySubscribers, il faudra appeler toutes les méthodes de `update`.


### 4 - Scenario complet.

Voici un déroulé du scénario que j'imagine : 
- On va créer une nouvelle NewsAgency
- On va créer 3 Subscribers : Pierre et Florent, Charles
- On va envoyer une news.
- On va enregistrer `Pierre` et `Florent` dans la NewsAgency
- On va envoyer des news.
- On va enregistrer `Charles` dans la NewsAgency.
- On va envoyer des news.
- On va dés-enregistrer `Charles`
- On va envoyer des news.

## Aller plus loin

On va créer un nouveau Subscriber de style `WebsiteSubscriber`. Cette classe a chaque news reçue, devra envoyer une requête en **POST** vers l'extérieur (on pourra utiliser le site [webhook.site](https://webhook.site/))

- [Protocole HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Guides/Overview)
- [Exemple cURL avec PHP](https://www.php.net/manual/en/curl.examples-basic.php)