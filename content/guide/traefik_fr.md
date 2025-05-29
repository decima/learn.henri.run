---
title: Comment configurer Traefik
hideToc: false
---

## Mise en place

### step 1

Prendre un nouveau serveur avec une adresse ip publique

> [!WARNING]
> Attention, sur scaleway il faut ajouter des clés ssh avant de monter l’instance, sinon aucun accès à la machine!

### step 2

Configurer le nom de domaine (via cloudflare ou autre) pour que la zone A de votre domaine (dans notre exemple : *
.cnum.henri.run) pointe vers l’ip publique du serveur.

### step 3

Se connecter au serveur en SSH et installer docker
Créer un réseau docker qui servira de réseau partagé entre tous les containers que traefik doit gérer :

```shell
docker network create frontend
```

Créer un dossier ~/traefik sur votre serveur. Dans ce dossier, créer un fichier docker-compose.yaml et mettre le contenu
du fichier suivant.

```yaml
version: "3.7"

services:
  reverse-proxy:
    restart: always
    image: traefik:v2.8.3
    command:
      #- "--log.level=DEBUG"

      # activation de l'api traefik pour pouvoir voir le dashboard
      - "--api=true"
      - "--api.dashboard=true"

      # declaration de 2 points d'entree : "web" et "websecure"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"

      # configuration du provider docker : ecoute de la socket docker 
      # + le reseau frontend
      - "--providers.docker.endpoint=unix:///var/run/docker.sock"
      - "--providers.docker.exposedbydefault=false"
      - "--providers.docker.network=frontend"

      # declaration de regles de signature "myresolver"
      # de certificats via httpChallenge
      - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.myresolver.acme.email=h.larget@gmail.com"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"

    ports:
      - 80:80 # les ports associes aux entrypoints
      - 443:443
    volumes:
      # sauvegarde des certificates
      - traefik-certificates:/letsencrypt
      # Pour que traefik ecoute les docker events
      - /var/run/docker.sock:/var/run/docker.sock:ro
    networks:
      # le network dans lequel tous les containers qui seront expose devront etre
      - frontend
    labels:
      # pour ce container on active traefik
      - "traefik.enable=true"

      # middleware "redirect-to-https" qui va rediriger vers https				
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"

      # regle de router "http-catchall" :
      # quelque-soit le nom de domaine
      # sur le point d'entree web
      # on lui attache le middlewares redirect-to-https declare par docker
      - "traefik.http.routers.http-catchall.rule=hostregexp(`{host:(.+)}`)"
      - "traefik.http.routers.http-catchall.entrypoints=web"
      - "traefik.http.routers.http-catchall.middlewares=redirect-to-https@docker"

      # regle de router "api" :
      # si on arrive sur traefik.cnum.henri.run
      # via le point d'entree websecure
      # le service a fournir s'appelle api@internal
      - "traefik.http.routers.api.rule=Host(`traefik.cnum.henri.run`)"
      - "traefik.http.routers.api.entrypoints=websecure"
      - "traefik.http.routers.api.service=api@internal"

      # et on va utiliser "myresolver" pour le certificat tls du router
      - "traefik.http.routers.api.tls.certresolver=myresolver"
  whoami:
    image: "containous/whoami"
    container_name: "simple-service"
    networks: [ "frontend" ]
    labels:
      # on dit a traefik de regarder ce container
      - "traefik.enable=true"

      # on declare un service whoami-service (nom que tu veux)
      - "traefik.http.services.whoami-service.loadbalancer.server.port=80"

      # on declare un routeur whoami, 
      # on dit qu'il utilise le service whoami-service declare par docker
      # on lui donne des regles de routage et de points d'entree
      - "traefik.http.routers.whoami.service=whoami-service@docker"
      - "traefik.http.routers.whoami.rule=Host(`whoami.cnum.henri.run`)"
      - "traefik.http.routers.whoami.entrypoints=websecure"

      # enfin on lui dit d'utiliser myresolver pour le tls.
      - "traefik.http.routers.whoami.tls.certresolver=myresolver"

volumes:
  # volume des certificats traefik
  traefik-certificates:
networks:
  # reseau a lier aux containers pour que traefik les ecoute
  frontend:
    name: frontend
    external: true
```

- Une fois les valeurs bien renseignées, lancer le fichier avec :

```bash
docker compose up -d
```

Vous pouvez vérifier que tout cela fonctionne grâce aux urls [**whoami.cnum.henri.run](http://whoami.cnum.henri.run)**
et [**traefik.cnum.henri.run**](http://traefik.cnum.henri.run)

> [!TIP]
> Pas de possiblité de prendre un serveur ? pas de panique, Traefik fournit également des verifications par DNSChallenge

## Comment utiliser un DNSChallenge

Dans le cas ou nous n’avons pas de serveur avec une ip publique, on peut remplacer la config de HTTPChallenge par une
config DNSChallenge. Pour ça, configurer une zone dns de la manière suivante :

```
mydomain.com.     A 192.168.1.10
```

puis modifier la config de traefik comme suit :

```diff
...
-		  - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
+		  - "--certificatesresolvers.myresolver.acme.dnschallenge=true"
+		  - "--certificatesresolvers.myresolver.acme.dnschallenge.provider=cloudflare"
			- "--certificatesresolvers.myresolver.acme.email=**h.larget@gmail.com**"
		  - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
+   environment:
+     CF_API_EMAIL: CLOUDFLARE_EMAIL
+     CF_API_KEY: CLOUDFLARE_KEY # a RW api key on the domain
    ports:
      - 80:80 # les ports associes aux entrypoints
      - 443:443
...
```

**Les providers disponibles** : https://doc.traefik.io/traefik/https/acme/#providers

Cette méthode requière de donner des permissions en écriture aux zones DNS.

## PostgreSQL + PhpPgAdmin

```yaml
version: "3.8"
services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: admin
    networks:
      - backend # pour communiquer avec pgadmin
    volumes:
      - local_pgdata:/var/lib/postgresql/data
  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin4_container
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    volumes:
      - pgadmin-data:/var/lib/pgadmin
    networks:
      - frontend # pour communiquer avec traefik
      - backend # pour communiquer avec postgres
    labels:
      - "traefik.enable=true"

      # declaration du service "pgadminApp@docker" et binding sur le port 80
      # obligatoire sur swarm, facultatif si on a qu'un seul port EXPOSED
      # par defaut prendra le nom du service du docker-compose
      - "traefik.http.services.pgadminApp.loadbalancer.server.port=80"

      # declaration du routeur "pgadmin" attached a "pgadminApp@docker"
      # entrypoint: websecure
      # rule : pgadmin.cnum.henri.run
      # tls : myresolver
      - "traefik.http.routers.pgadmin.rule=Host(`pgadmin.cnum.henri.run`)"
      - "traefik.http.routers.pgadmin.entrypoints=websecure"
      - "traefik.http.routers.pgadmin.tls.certresolver=myresolver"
      # non obligatoire, seulement si plusieurs services declared
      - "traefik.http.routers.pgadmin.service=pgadminApp@docker"

volumes:
  local_pgdata:
  pgadmin-data:

networks:
  frontend:
    external: true
  backend: 
```

> [!TIP]
> **Pour se connecter à la pgadmin** :   
> username: admin@admin.com  
> password: admin
>
> **Pour se connecter depuis pgadmin** :  
> host: db  
> username: user  
> password: admin

## Lancer un service PHP-FPM bind sur traefik

On va lancer une application hello world en PHP. Pour cette étape on va d’abord créer un nouveau répertoire ~/app et
aller dedans.

-
- Créer ensuite un dossier public et un fichier public/index.php et mettre le contenu suivant dedans :

```php
<?php echo "hello World";?>
```

- Dans le dossier ~/app créer un dossier nginx et un fichier nginx/server.conf

```
server {  

     listen 80 default_server;  
     root /var/www/html/public;  
     index index.html index.php;  

     charset utf-8;  

     location / {  
      try_files $uri $uri/ /index.php?$query_string;  
     }  

     location = /favicon.ico { access_log off; log_not_found off; }  
     location = /robots.txt { access_log off; log_not_found off; }  

     access_log off;  
     error_log /var/log/nginx/error.log error;  

     sendfile off;  

     client_max_body_size 100m;  

     location ~ .php$ {  
      fastcgi_split_path_info ^(.+.php)(/.+)$;  
      fastcgi_pass php:9000;  
      fastcgi_index index.php;  
      include fastcgi_params;  
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;  
      fastcgi_intercept_errors off;  
      fastcgi_buffer_size 16k;  
      fastcgi_buffers 4 16k;  
    }  

     location ~ /.ht {  
      deny all;  
     }  
  }
```

- Toujours dans le dossier `~/app` créer un fichier `docker-compose.yaml` avec la configuration suivante :

```yaml
version: "3.8"
services:
  app_web:
    image: nginx:latest
    networks:
      - frontend # pour communiquer avec traefik
      - backend # pour communiquer avec php
    volumes:
			# ajout de la config nginx
      - ./nginx/server.conf:/etc/nginx/conf.d/default.conf
			# partage du dossier public dans var/www/html/public
      - ./public:/var/www/html/public
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.myapp.rule=Host(`myapp.cnum.henri.run`)"
      - "traefik.http.routers.myapp.entrypoints=websecure"
      - "traefik.http.routers.myapp.tls.certresolver=myresolver"
      - "traefik.http.routers.myapp.service=myapp@docker"
      - "traefik.http.services.myapp.loadbalancer.server.port=80"
  php:
    image: php:fpm
    networks:
      - backend #pour communiquer avec nginx
    volumes:
      - ./:/var/www/html
networks:
  frontend: # reseau de traefik
    external: true
  backend: #reseau interne
```