import Keycloak from "keycloak-js";

const keycloakConfig = {
    url: "http://localhost:8080",
    realm: "bookstore-realm",
    clientId: "bookstore-frontend",
};

// Create and export the keycloak instance
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;