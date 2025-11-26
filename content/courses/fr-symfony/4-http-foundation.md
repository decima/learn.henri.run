---
title: HTTP foundation
level: 4
type: 1_courses
description: La bibliothèque HTTP Foundation de Symfony pour gérer les requêtes et réponses HTTP.
cover: ../images/cover-4.png
hideTitle: true
hideCoverOnCourse: true
---

## Symfony et HTTP Foundation

Symfony est une **suite de composants** qui a pour but de **répondre aux besoins des développeurs** et de **faciliter le
développement** d'applications web.

En PHP, on peut accéder aux différentes données d'une **requête HTTP** en utilisant la variable **`$GLOBALS`** et ses
variables filles : **`$_GET`** , **`$_POST`**, **`$_SERVER`**, **`$_SERVER`**, **`$_FILES`**, **`$_ENV`**,
**`$_SESSION`**, **`$_COOKIE`**

Le problème de l'usage de ces variables, c'est le fait que ça rend le code vite **illisible** et **non-réutilisable**.

Symfony a créé une **bibliothèque d'objets** permettant de manipuler le protocole HTTP de manière propre en offrant une
**couche d’abstraction**. Cette bibliothèque appelée **HttpFoundation** est au coeur de **TOUS** les frameworks PHP
modernes.

---

## Request

La classe [Request](https://github.com/symfony/symfony/blob/v8.0.0/src/Symfony/Component/HttpFoundation/Request.php) est
le lien direct avec toutes les variables de **`$GLOBALS`**.

Un lien direct est fait avec des classes de
type [ParameterBag](https://github.com/symfony/symfony/blob/v8.0.0/src/Symfony/Component/HttpFoundation/ParameterBag.php),
et ainsi :

| PHP             | $request                                         |
|-----------------|--------------------------------------------------|
| **`$_GET`**     | **`$request->query`**                            |
| **`$_POST`**    | **`$request->request`**                          |
| **`$_FILES`**   | **`$request->files`**                            |
| **`$_COOKIES`** | **`$request->cookies`**                          |
| **`$_SERVER`**  | **`$request->server`** & **`$request->headers`** |

---

<columns>
<column>

```php
if(isset($_GET["id"])){
  $id = $_GET["id"];
}else{
  $id = 42;
}
```

</column>
<column>

```php
use Symfony\Component\HttpFoundation\Request;
$request = Request::createFromGlobals();
$id = $request->query->get("id",42);
```

</column>
</columns>

<columns>
<column>

```php
$name = "";
if(isset($_POST["name"])){
  $name = $_POST["name"];
}
```

</column>
<column>

```php
$name = $request->request->get("name","");
```

</column>
</columns>

<columns>
<column>

```php
if(isset($_POST["submit"])){
}
```

</column>
<column>

```php
if($request->request->has("submit")){
}
```

</column>
</columns>

---

<columns>
<column>

```php
if (isset($_FILES['student_homework'])) {
    $tmpPath = $_FILES['student_homework']['tmp_name'];
    $originalName = $_FILES['student_homework']['name'];
    $ext = pathinfo($originalName, PATHINFO_EXTENSION);
    move_uploaded_file($tmpPath, 'uploads/homework.' . $ext);
}

```

</column>
<column>

```php
$file = $request->files->get('student_homework');
if ($file) {
    $ext = $file->guessExtension();
    $file->move('uploads', 'homework.' . $ext);
}
```

</column>
</columns>

---

## Response

La classe [Response](https://github.com/symfony/symfony/blob/v8.0.0/src/Symfony/Component/HttpFoundation/Response.php)
est une classe qui
permet de réaliser une réponse HTTP tout en évitant de faire des appels aux fonctions **`header`** et autres du php.

En pratique :

<columns>
<column>

```php
echo "hello world!";
```

</column>
<column>

```php
use \Symfony\Component\HttpFoundation\Response;
$response =new Response("hello world!");
$response->send();
```

</column>
</columns>

---

### Renvoyer une page d’erreur

<columns>
<column>

```php
header("HTTP/1.0 404 Not Found");
echo "Page not found!";
```

```php
$response = new Response("Page not found!", Response::HTTP_NOT_FOUND);
$response->send();
```

</column>
</columns>

---


### Redirection

```php
header("Location: /login");
```

```php
use \Symfony\Component\HttpFoundation\RedirectResponse;
$response = new RedirectResponse("/login");
$response->send();
```

---

### Réponse JSON

```php
header('Content-Type: application/json');
echo json_encode(['key' => 'value']);
```

```php
use \Symfony\Component\HttpFoundation\JsonResponse;
$response = new JsonResponse(["key"=>"value"]);
$response->send();
```

---

### Téléchargement d’un fichier

```php
header('Content-Description: File Transfer');
header('Content-Type: text/plain');
header('Content-Disposition: inline; filename=file.txt');
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize($filePath));

readfile("file.txt");
```

```php
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

$response = new BinaryFileResponse("file.txt");
$response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT);

return $response;
```