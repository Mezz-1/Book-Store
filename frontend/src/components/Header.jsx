import { NavLink } from "react-router-dom";

export default function Header({ authenticated, user, login, logout, register }) {
  return (
    <header style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white',
      padding: '15px 20px',
      marginBottom: '20px'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          📚 Book APP
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '20px' }}>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              backgroundColor: isActive ? '#34495e' : 'transparent'
            })}
          >
            Accueil
          </NavLink>
          
          {authenticated && (
            <>
              <NavLink 
                to="/books" 
                style={({ isActive }) => ({
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#34495e' : 'transparent'
                })}
              >
                BookPage
              </NavLink>
              <NavLink 
                to="/categories" 
                style={({ isActive }) => ({
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  backgroundColor: isActive ? '#34495e' : 'transparent'
                })}
              >
                CategoryPage
              </NavLink>
            </>
          )}
          
          <NavLink 
            to="/about" 
            style={({ isActive }) => ({
              color: 'white',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              backgroundColor: isActive ? '#34495e' : 'transparent'
            })}
          >
            À propos
          </NavLink>
        </nav>

        {/* Auth Buttons & User Info */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {!authenticated ? (
            <>
              <button 
                onClick={login} 
                style={{ padding: '8px 16px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Login
              </button>
              <button 
                onClick={register} 
                style={{ padding: '8px 16px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Register
              </button>
            </>
          ) : (
            <>
              <span style={{ color: '#ecf0f1' }}>
                👋 {user?.firstName || user?.username || user?.email}
              </span>
              <button 
                onClick={logout} 
                style={{ padding: '8px 16px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}