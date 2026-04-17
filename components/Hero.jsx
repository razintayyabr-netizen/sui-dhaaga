export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/anarkali1.jpg" alt="" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">✨ Crafted with Love</div>
        <h1 className="hero-title">Sui Dhaaga</h1>
        <div className="hero-subtitle">
          <div className="hero-line" />
          <p className="hero-subtitle-text">Anarkali, Delhi</p>
          <div className="hero-line" />
        </div>
        <p className="hero-desc">
          Exquisite Anarkali Lehenga, Designer Blouse, Simple Suits & all types of ladies wear.
          Custom stitching with premium fabric quality. Your style, our craftsmanship.
        </p>
        <div className="hero-ctas">
          <a href="https://wa.me/919650557785?text=Hi! I am interested in Anarkali Lehenga" target="_blank" className="btn-primary">
            <span>💬 Enquire on WhatsApp</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="#services" className="btn-outline">View Services</a>
        </div>
        <div className="hero-pills">
          <div className="hero-pill"><span>📍</span><span>Anarkali, Delhi</span></div>
          <div className="hero-pill"><span>📞</span><a href="tel:+919650557785">9650557785</a></div>
          <div className="hero-pill"><span>📱</span><a href="tel:+919999197911">9999197911</a></div>
          <div className="hero-pill"><span>🕐</span><span>Open Daily</span></div>
        </div>
      </div>
    </section>
  );
}