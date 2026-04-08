# Book Store - Application Full Stack avec Keycloak

Application de gestion de librairie permettant de gérer des livres et des catégories avec authentification sécurisée via Keycloak utilisant le protocole OpenID Connect.

## Technologies utilisées
Frontend : React avec Vite, Axios et React Router. Backend : Express.js avec MongoDB et Mongoose. Sécurité : Keycloak pour l'authentification, JWT pour les tokens et RBAC pour le contrôle d'accès.

## Fonctionnalités
Authentification des utilisateurs avec Login et Register via Keycloak. Gestion complète des livres (ajout, consultation, modification, suppression). Gestion des catégories. Contrôle d'accès basé sur les rôles : les utilisateurs avec le rôle CLIENT peuvent lire et ajouter des livres, tandis que les utilisateurs avec le rôle ADMIN peuvent également modifier et supprimer des livres.

## Installation
Démarrer Keycloak avec Docker Compose. Démarrer le backend avec npm run dev. Démarrer le frontend avec npm run dev.

## Configuration Keycloak
Créer un realm nommé bookstore-realm. Créer un client public nommé bookstore-frontend avec comme redirect URI http://localhost:5173. Créer les rôles CLIENT et ADMIN. Créer un groupe clients et y assigner le rôle CLIENT, puis configurer ce groupe comme groupe par défaut pour que tout nouvel utilisateur reçoive automatiquement le rôle CLIENT. Créer un utilisateur admin avec le rôle ADMIN.

## Sécurité
Le backend utilise deux middlewares : requireKeycloakAuth qui vérifie la validité du token JWT et retourne une erreur 401 si le token est invalide ou absent, et requireRole qui vérifie que l'utilisateur possède le rôle requis et retourne une erreur 403 en cas de droit insuffisant.

## Tests effectués
Sans authentification, l'accès à l'API retourne une erreur 401. Avec un utilisateur CLIENT, les requêtes GET et POST réussissent mais les requêtes PUT et DELETE retournent une erreur 403. Avec un utilisateur ADMIN, toutes les requêtes réussissent. Le token JWT est correctement envoyé dans l'en-tête Authorization Bearer.

## Auteur
EZZOUKHRY Mouhssine

## Date
Avril 2026

## Images
Images

![login](image.png)

![Register](image-1.png)

![HomePage](image-5.png)

![BookPage](image-9.png)

![BookDetailsPage](image-10.png)

![BookEditPage](image-11.png)

![CategoryPage](image-7.png)

![AboutPage](image-8.png)