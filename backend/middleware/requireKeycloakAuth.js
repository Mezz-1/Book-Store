import { jwtVerify, createRemoteJWKSet } from 'jose';

// JWKS endpoint from Keycloak
const JWKS_URL = 'http://localhost:8080/realms/bookstore-realm/protocol/openid-connect/certs';
const jwksClient = createRemoteJWKSet(new URL(JWKS_URL));

export const requireKeycloakAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                error: 'No token provided',
                message: 'Authorization header with Bearer token required' 
            });
        }

        const token = authHeader.split(' ')[1];
        
        // Verify the JWT token
        const { payload } = await jwtVerify(token, jwksClient, {
            issuer: `http://localhost:8080/realms/bookstore-realm`,
            audience: 'account'
        });
        
        // Attach user info to request
        req.user = {
            id: payload.sub,
            email: payload.email,
            username: payload.preferred_username,
            roles: payload.realm_access?.roles || [],
            ...payload
        };
        
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        
        if (error.code === 'ERR_JWT_EXPIRED') {
            return res.status(401).json({ error: 'Token expired' });
        }
        
        if (error.code === 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED') {
            return res.status(401).json({ error: 'Invalid token signature' });
        }
        
        res.status(401).json({ 
            error: 'Invalid or expired token',
            details: error.message 
        });
    }
};