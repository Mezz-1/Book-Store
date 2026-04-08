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

<img width="428" height="380" alt="image" src="https://github.com/user-attachments/assets/063cd77b-57bb-4711-a3f2-802bd9bb9897" />

<img width="1366" height="687" alt="image" src="https://github.com/user-attachments/assets/e52ff759-6e5b-4921-912d-2ca52b407e9b" />

<img width="867" height="670" alt="image" src="https://github.com/user-attachments/assets/2e9fc152-5ffd-4fad-bd69-1f0434e8c934" />

<img width="872" height="543" alt="image" src="https://github.com/user-attachments/assets/06b3976f-81f9-4ce7-884a-db13e4ad8ec8" />

<img width="889" height="553" alt="image" src="https://github.com/user-attachments/assets/01723a48-58cb-4494-8dc3-14e509703cb9" />

<img width="885" height="548" alt="image" src="https://github.com/user-attachments/assets/406cb922-7954-4cd4-9b62-da017acdad0b" />

<img width="899" height="595" alt="image" src="https://github.com/user-attachments/assets/ffcfcc82-2c07-49a7-b428-04b952f5bb15" />

<img width="1297" height="633" alt="image" src="https://github.com/user-attachments/assets/6b838208-ac38-452b-a5da-66e1c52744b6" />

<img width="476" height="507" alt="image" src="https://github.com/user-attachments/assets/8bff0ca0-c347-44cf-8cb4-16b6ab13c416" />





