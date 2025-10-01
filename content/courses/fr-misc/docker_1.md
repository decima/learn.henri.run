---
title: "The Box that changed the world"
level: 1
type: "Docker"
description: "Introduction à Docker"
cover: ../images/docker/docker1-cover.jpg
hideTOC: true
---

<hideOnSlides>
<credits>
Photo de <a href="https://unsplash.com/fr/@steve_j?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Steve Johnson</a> sur <a href="https://unsplash.com/fr/photos/un-groupe-dobjets-tridimensionnels-assis-les-uns-sur-les-autres-FwzmMkhHGTw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
</credits>
</hideOnSlides>


<columns>
<column flex-2>

## Voici un iPhone :

(pour la suite, on l’appellera **Patrick**)

</column>
<column flex-1>

![](../images/docker/patrick.png)

</column>
</columns>

---

Patrick vient de la petite usine de Foxconn située en Chine 🇨🇳, dans la ville de Zhengzhou, dans la région de Henan.

<columns>
<column>

![](../images/docker/foxconn_loc.png)

</column>
<column>

![](../images/docker/foxconn_sat.png "Pour la culture, Foxconn, c’est 350 000 employés vivants et travaillant sur un petit terrain de 10km², environ 1 400 terrains de football ⚽")

</column>
</columns>

## Fabriqué dans cette usine, Patrick est destiné au stock du magasin de New York 🍎, aux États-Unis 🇺🇸

---

<columns>
<column flex-1>

![](../images/docker/zhengzhou_airport.png)

</column>
<column flex-2>

## Patrick quitte donc la maternité en direction de l’aéroport de Zhengzhou

- ~10M d’habitants
- Existe depuis 260 avant J.C.

</column>
</columns>

---

<columns>
<column  flex-3>

## Et voilà que Patrick s’envole pour Qingdao

(ou Tsingtao, comme la bière 🍺, qui vient de cet endroit, 2ème bière chinoise, mais 1ère en export)

</column>
<column flex-2>

![](../images/docker/zengzhou_qingdao.png)

</column>
</columns>

<columns>
<column flex-2>

![](../images/docker/qingdao_port.png)
</column>   
<column flex-3>
Qingdao et son petit port, seulement 7ème port mondial, et 9M d'habitants.
</column>
</columns>

---

## Patrick est chargé dans un bateau, prêt à traverser le Pacifique, en direction du port de Hueneme, entre San Francisco et San Diego.

![](../images/docker/qingdao_hueneme.png)


---

## Enfin, Patrick embarque dans un train, pour traverser les États-Unis, et arrive 30 heures plus tard en Pennsylvanie, à Carlisle.

L’entrepôt East-coast d’Apple, à 40h de route en voiture.

![](../images/docker/hueneme_carlisle.png)

---

## À partir d’ici, Patrick continue son chemin en camion

Jusqu’au petit Apple store de la 5th avenue à New York
Magasin ouvert 24h/24, 365 jours par an.

![](../images/docker/carlisle_ny.png)

![](../images/docker/ny_store.png)

---

## ... tout ça pour finir dans les mains d’un bobo-hipster écologiste 😭

<columns>
<column flex-1>

- Recap’ du trajet
- Camion
- Avion
- Bateau
- Train
- Camion

> Ce n’est qu’un des 10 000 trajets qu’il aurait pu prendre, ce n’est juste qu’une suggestion.

</column>
<column flex-1>

Maintenant, il faut imaginer que Patrick voyage avec ses frères et soeurs vers ce magasin, avec ses 900 employés et ses
millions de visiteurs chaque année.

*Donc imaginons maintenant le même trajet si chaque iPhone devait être déchargé à la main à chaque étapes.*

</column>
</columns>

---

<columns>
<column flex-2>

Le premier conteneur d’expédition a été inventé et breveté en **1956** par l’américain **Malcolm McLean**.

> *Pour la petite histoire, Malcolm McLean avait acheté son premier camion en 1934, et en 56, il avait la 5ème plus grande entreprise de camionnage de tous les États-Unis.*
>

> *Passé 20 ans à voir des camions chargé et déchargé des caisses de tout type de tailles l’ont inspiré. Il achète ensuite une flotte de vieux pétroliers et commence à faire ses expériences.*
>

En 1956, charger un navire coûtait **5.86$** la tonne. Avec le conteneur, on est passé à **0.16$** la tonne.

Le standard défini en 1971, utilise encore les dimensions de **McLean**

Aujourd’hui, il y a 17 millions de conteneurs en circulation constante, pour 200 millions de trajets par an.

</column>
<column flex-1>

![](../images/docker/theboxthatchangedtheworld.png)

</column>
</columns>

# La grande question : **Qu’est-ce qui a fait le succès de cette boîte ?**

---

## La standardisation.
Sa facilité de transport, de stockage et de manutention.

![](../images/docker/standards.png)

---


<centered>

# Linux Glory 🐧

The true hero of modern computing.

</centered>

---

## Petit rappel d’historique

- En 1991 👶, un étudiant finlandais du nom de **Linus Torvalds** s’intéresse aux systèmes d’exploitation, et surtout Unix. Son problème ? La distribution d’Unix met plusieurs années à arriver à sa fac, et Unix est restreint au domaine universitaire. Du coup, il développe un nouveau noyau avec les développeurs GNU : GNU/Linux
- 1993 : sortie de Debian 🚀
- 1998 : Oracle migre ses systèmes sous Linux 🤩
- 2001 : IBM offre 1B$ au projet Linux 💰
- 2007 : Android 🤖
- 2010 : Microsoft Azure ☁️

Aujourd’hui, Linux est le système d’exploitation le plus utilisé au monde, aussi bien pour les professionnels que les particuliers, et c’est un système open-source.

---

## Retour à 2006

En 2006, des ingénieurs de chez **Google** travaillent sur une fonctionnalité du Kernel Linux : la **conteneurisation de processus**. Mais le projet est vite renommé (2007) en **Control Groups**, à cause du terme conteneur déjà utilisé dans le kernel Linux.

Les **cgroups** sont là pour limiter, compter et isoler l’utilisation des ressources.

Ils offrent essentiellement 5 fonctionnalités :

- **Limiter les ressources** : Limiter la mémoire, le processeur, le disque, le réseau…
- **Prioriser** : Les groupes peuvent obtenir une plus grande part de ressource processeur ou de bande passante.
- **Comptabiliser** : Permet de mesurer la quantité de ressources consommées.
- **Isoler** : Séparation par espace de nommage pour les groupes, afin qu’il ne puissent pas voir les processus des autres, les connexions réseaux ou les fichiers.
- **Contrôler** : Permet le gel d’un group de processus, leur vérification et leur redémarrage.

---

## LXC en 2008

Le projet Linux Container (LXC) est un système de virtualisation basé sur **cgroups** qui offre la possibilité de créer des **conteneurs**. Un conteneur est un ensemble de fichiers et processus qui sont restreints dans un **cgroup**.

On cloisonne ainsi des processus sans ajouter la lourdeur d’une machine virtuelle.

---

## Machines virtuelles vs Conteneurs

![](../images/docker/vm-vs-container.png)

---

![](../images/docker/athena_docker.png)

---

## Docker

Entre 2008 et 2013, les conteneurs sont un métier de niche, et en 2013, avec la sortie de Docker, c’est l’explosion de leur usage.

Basé à l’origine sur LXC (*puis remplacé par leur lib interne*), Docker offre une solution complète de conteneurisation :

- Un écosystème d’applications prêtes à l’emploi (dockerHub)
- Le moteur de conteneurisation (docker Engine)
- Des solutions d’orchestration (Docker Compose et Swarm)

---

![](../images/docker/docker.svg)

Docker est donc un système de virtualisation au niveau du système d’exploitation. Ce cours portera sur 2 concepts :

- Les images et containers
