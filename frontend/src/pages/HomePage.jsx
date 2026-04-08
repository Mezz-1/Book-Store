import { useAuth } from "../auth/KeycloakProvider";

export default function HomePage() {
  const { authenticated } = useAuth();

  return (
    <div style={{
      textAlign: 'center',
      padding: '50px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      color: 'white',
      margin: '20px 0'
    }}>
      {/* Hero Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          📚 Bienvenue à la Bibliothèque BookStore
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px' }}>
          "Un livre est un rêve que vous tenez entre vos mains." 📖
        </p>
        
        {!authenticated ? (
          <div>
            <p style={{ marginBottom: '20px' }}>
              Rejoignez notre communauté de lecteurs passionnés !
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '10px' }}>
                📖 +1000 Livres
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '10px' }}>
                👥 +500 Lecteurs
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '10px' }}>
                ⭐ 4.8/5 Évaluations
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '1.3rem', marginBottom: '20px' }}>
              ✨ Heureux de vous revoir parmi nos livres ! ✨
            </p>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              padding: '20px', 
              borderRadius: '15px',
              display: 'inline-block'
            }}>
              <p>📖 "La lecture est un voyage dont chaque page tournée est une destination."</p>
              <p style={{ marginTop: '10px', fontStyle: 'italic' }}>- Inconnu</p>
            </div>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '60px auto 0',
        textAlign: 'center'
      }}>
        <div style={{ padding: '20px' }}>
          <div style={{ fontSize: '3rem' }}>🔍</div>
          <h3>Découvrez</h3>
          <p>Explorez notre collection variée de livres</p>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ fontSize: '3rem' }}>💖</div>
          <h3>Favoris</h3>
          <p>Créez votre liste de livres préférés</p>
        </div>
        <div style={{ padding: '20px' }}>
          <div style={{ fontSize: '3rem' }}>📝</div>
          <h3>Partagez</h3>
          <p>Donnez votre avis sur les livres lus</p>
        </div>
      </div>
    </div>
  );
}