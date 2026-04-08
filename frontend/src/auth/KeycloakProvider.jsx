import React, { useState, useEffect, useRef } from 'react';
import keycloak from './keycloak';

export const AuthContext = React.createContext();

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within KeycloakProvider');
    }
    return context;
};

export default function KeycloakProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;
        initKeycloak();
    }, []);

    const initKeycloak = async () => {
        try {
            console.log("Initializing Keycloak...");
            
            const authenticated = await keycloak.init({
                onLoad: 'login-required', // Changed from 'check-sso' to force login
                checkLoginIframe: false,
                redirectUri: 'http://localhost:5173',
                pkceMethod: 'S256'
            });
            
            console.log("Keycloak authenticated:", authenticated);
            setAuthenticated(authenticated);
            
            if (authenticated) {
                const profile = await keycloak.loadUserProfile();
                setUser(profile);
            }
        } catch (error) {
            console.error("Keycloak init error:", error);
        } finally {
            setLoading(false);
        }
    };

    const login = () => {
        console.log("Login triggered");
        keycloak.login({
            redirectUri: 'http://localhost:5173'
        });
    };

    const logout = () => {
        console.log("Logout triggered");
        keycloak.logout({
            redirectUri: 'http://localhost:5173'
        });
    };

    const register = () => {
        console.log("Register triggered");
        keycloak.register({
            redirectUri: 'http://localhost:5173'
        });
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div>Loading authentication...</div>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{
            authenticated,
            user,
            login,
            logout,
            register,
            keycloak
        }}>
            {children}
        </AuthContext.Provider>
    );
}