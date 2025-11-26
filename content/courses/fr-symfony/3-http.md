---
title: HTTP?
level: 3
type: 1_courses
description: Comprendre le protocole HTTP, son fonctionnement, ses méthodes et son rôle dans les applications web.
cover: ../images/cover-3.png
hideTitle: true
hideCoverOnCourse: true
---


Le protocol HTTP est un protocole de communication Client-Serveur inventé dans les années 90 pour le World-Wide-Web. La
plupart des clients utilisant ce protocol sont les navigateurs web.

HTTP Version

<reveal>

- 1991: 0.9
- 1996: 1.0
- 1997: 1.1
- 2015: 2.0
- 2018: 3.0

</reveal>

---

## Pourquoi HTTP

- Simple : Les messages sont compréhensibles par les humains.
- Extensible : À partir de HTTP/1.0, les en-têtes HTTP permettent d'étendre facilement le protocole. De nouvelles
  fonctionnalités peuvent même être introduites par un simple accord entre le client et le serveur.

---

## Flux HTTP

Lorsqu'un client veut communiquer avec un serveur, il réalise les étapes suivantes :

<reveal>

- **Il ouvre une connexion TCP** : la connexion TCP va être utilisée pour envoyer une ou plusieurs requêtes et pour
  recevoir une réponse. Le client peut
  ouvrir une nouvelle connexion, réutiliser une connexion existante ou ouvrir plusieurs connexions TCP vers le serveur.

- **Il envoie un message HTTP** : les messages HTTP (avant HTTP/2) sont lisibles par les humains. Avec HTTP/2, ces
  simples messages sont en-capsulés
  dans des trames, rendant la lecture directe impossible, mais le principe reste le même.

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr

```

- **Il lit la réponse envoyée par le serveur**

```http
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html>
<html>.....
```

- **Il ferme la connexion**  …ou la réutilise pour les requêtes suivantes.

</reveal>

---

## Messages

### Requête

```
POST / HTTP/1.1
Host: perdu.com
User-Agent: curl/7.58.0
Accept: */*
Content-Type: application/x-www-form-urlencoded

username=Henri&password=Henri
```

- Méthode: **POST**
- Path: /
- Protocol: **HTTP/1.1**
- Headers: **Host, User-Agent,Accept, Content-Type**
- Body: Le reste (séparé par un saut de ligne)

![http-req](../images/http-req.png)

---

### Quelles méthodes connaissez-vous ?

<reveal>

- **GET** : La méthode GET demande une représentation de la ressource spécifiée. Les requêtes utilisant GET ne doivent
  récupérer que des données.

- **HEAD** : La méthode HEAD demande une réponse identique à une requête GET, mais sans le corps de la réponse.

- **POST** : La méthode POST soumet une entité à la ressource spécifiée, provoquant souvent un changement d'état ou des
  effets secondaires sur le serveur.

- **PUT** : La méthode PUT remplace toutes les représentations actuelles de la ressource cible par la charge utile de la
  demande.

- **DELETE** : La méthode DELETE supprime la ressource spécifiée.

- **CONNECT** : La méthode CONNECT établit un tunnel vers le serveur identifié par la ressource cible.

- **OPTIONS** : La méthode OPTIONS décrit les options de communication pour la ressource cible.

- **TRACE** : ****La méthode TRACE effectue un test de boucle de message le long du chemin vers la ressource cible.

- **PATCH** : La méthode PATCH applique des modifications partielles à une ressource.

</reveal>

### Content type ?

<reveal>

- text/plain: Texte
- text/html: Contenu HTML
- image/jpeg: image JPEG
- multipart/form-data: Form post avec fichier
- application/x-www-form-urlencoded: Form post
- application/xml: XML
- application/json: JSON
- application/octet-stream: Flux
  </reveal>

---

## Réponse

```
HTTP/1.1 200 OK
Date: Sun, 26 Jan 2020 16:29:16 GMT
Last-Modified: Thu, 02 Jun 2016 06:01:08 GMT
Content-Length: 204
Content-Type: text/html

<html><head><title>Vous Etes Perdu ?...

```

- Version: HTTP/1.1
- Code: 200 - OK
- Headers: Content-Type, Content-Length…
- Body: le reste

![http-res](../images/http-res.png)

---

## Codes HTTP

<columns>
<column>

### 1XX - Informations
- 100 - CONTINUE (le client peut continuer sa requête)
- 101 - SWITCHING PROTOCOLS (le serveur accepte de changer de protocole, e.g. HTTP/1.1 -> HTTP/2)
- 102 - PROCESSING (la requête est en cours de traitement)

### 2XX - Succès

- 200 - OK
- 201 - CREATED
- 202 - ACCEPTED
- 204 - NO CONTENT (tout s'est bien passé mais le serveur n'a pas de contenu à nous renvoyer)
- 207 - MULTI-STATUS

### 3XX - Redirection

- 301 - MOVED PERMANENTLY
- 302 - FOUND (anciennement *Moved temporarily*)

</column>
<column>

### 4XX - Erreurs Client

- 400 - BAD REQUEST
- 401 - UNAUTHORIZED
- 403 - FORBIDDEN
- 404 - NOT FOUND
- 405 - METHOD NOT ALLOWED
- 409 - CONFLICT
- 418 - I'M A TEAPOT

### 5XX - Erreurs Serveur

- 500 - INTERNAL SERVER ERROR (*erreur générique*)
- 501 - NOT IMPLEMENTED
- 502 - BAD GATEWAY
- 503 - SERVICE UNAVAILABLE
- 504 - GATEWAY TIMEOUT

</column>
</columns>

[http.cat](https://http.cat/)
