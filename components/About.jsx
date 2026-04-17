export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-visual">
            <div className="ornament-circle">🧵</div>
          </div>
          <div className="about-text">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Our Story</span>
            <h2 className="section-title" style={{ color: 'white', marginBottom: '24px' }}>Tradition Meets <span style={{ color: 'var(--rose-light)' }}>Style</span></h2>
            <p>
              Sui Dhaaga brings you the finest Anarkali Lehengas, Designer Blouses & Ladies Wear from the heart of Anarkali, Delhi. With years of expertise in traditional Indian embroidery and modern fashion trends, we craft each piece with love and precision.
            </p>
            <p>
              Every outfit tells a story — of skilled hands, quality fabric, and attention to detail. From grand wedding lehengas to everyday suits, we ensure perfect fit and finish on every piece.
            </p>
            <h3>Why Choose Us</h3>
            <div className="about-features">
              <div className="about-feature"><span>✓</span><span>Premium Quality Fabric</span></div>
              <div className="about-feature"><span>✓</span><span>Custom Measurements</span></div>
              <div className="about-feature"><span>✓</span><span>Latest Designs & Trends</span></div>
              <div className="about-feature"><span>✓</span><span>Affordable Prices</span></div>
              <div className="about-feature"><span>✓</span><span>All Types of Ladies Wear</span></div>
              <div className="about-feature"><span>✓</span><span>MCD Ward No. 108, Anarkali</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}