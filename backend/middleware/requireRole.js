export const requireRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: 'User not authenticated' });
        }
        
        const userRoles = req.user.roles || [];
        
        // Check if user has any of the allowed roles
        const hasRole = allowedRoles.some(role => userRoles.includes(role));
        
        if (!hasRole) {
            return res.status(403).json({ 
                error: 'Forbidden',
                message: `Required roles: ${allowedRoles.join(', ')}`,
                your_roles: userRoles
            });
        }
        
        next();
    };
};