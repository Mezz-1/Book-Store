export default function About() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* En-tête inspirant */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}>
          📖 À Propos de BookStore
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>
          "Là où les livres prennent vie et les histoires commencent"
        </p>
      </div>

      {/* Mission */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '40px',
        borderLeft: '5px solid #3498db'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>🎯 Notre Mission</h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          BookStore est né d'une passion commune pour la lecture et la technologie. 
          Notre mission est de créer un espace où les amateurs de livres peuvent facilement 
          gérer leur bibliothèque, découvrir de nouvelles œuvres et partager leurs coups de cœur.
        </p>
      </div>

      {/* Ce que nous offrons */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
          ✨ Ce que nous vous offrons ✨
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>📚</div>
            <h3 style={{ textAlign: 'center', color: '#3498db' }}>Gestion Simple</h3>
            <p style={{ textAlign: 'center' }}>Ajoutez, modifiez et organisez vos livres en quelques clics</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🔒</div>
            <h3 style={{ textAlign: 'center', color: '#3498db' }}>Sécurisé</h3>
            <p style={{ textAlign: 'center' }}>Authentification Keycloak pour protéger vos données</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>🏷️</div>
            <h3 style={{ textAlign: 'center', color: '#3498db' }}>Catégories</h3>
            <p style={{ textAlign: 'center' }}>Classez vos livres par genre pour mieux les retrouver</p>
          </div>
        </div>
      </div>

      {/* Citation inspirante */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px',
        borderRadius: '20px',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '20px' }}>
          "Un livre est une fenêtre par laquelle on s'évade."
        </p>
        <p style={{ fontSize: '1rem' }}>- Julien Green</p>
      </div>

      {/* Technologies */}
      <div>
        <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>
          🛠️ Technologies utilisées
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px'
        }}>
          <span style={{ backgroundColor: '#61dafb', color: '#000', padding: '8px 16px', borderRadius: '20px' }}>React</span>
          <span style={{ backgroundColor: '#000', color: '#fff', padding: '8px 16px', borderRadius: '20px' }}>Express.js</span>
          <span style={{ backgroundColor: '#47A248', color: '#fff', padding: '8px 16px', borderRadius: '20px' }}>MongoDB</span>
          <span style={{ backgroundColor: '#4c9f70', color: '#fff', padding: '8px 16px', borderRadius: '20px' }}>Keycloak</span>
          <span style={{ backgroundColor: '#f0db4f', color: '#000', padding: '8px 16px', borderRadius: '20px' }}>JavaScript</span>
        </div>
      </div>

      {/* Footer de la page */}
      <div style={{
        marginTop: '50px',
        paddingTop: '30px',
        textAlign: 'center',
        borderTop: '2px solid #eee',
        color: '#666'
      }}>
        <p>© 2025 BookStore - Là où chaque histoire trouve son lecteur</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
          Développé avec ❤️ pour les passionnés de lecture
        </p>
      </div>
    </div>
  );
}