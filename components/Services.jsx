const services = [
  { icon: '👗', name: 'Anarkali Lehenga', desc: 'Beautiful Anarkali lehenga in various designs, colors & fabrics. Perfect for festivals, weddings & special occasions.' },
  { icon: '👚', name: 'Designer Blouse', desc: 'Trendy designer blouses with intricate embroidery, sequence work & modern cuts. Custom fitting guaranteed.' },
  { icon: '🥻', name: 'Simple Suit', desc: 'Elegant simple suits for daily wear & casual outings. Comfortable fabric with perfect finishing.' },
  { icon: '🧵', name: 'Custom Stitching', desc: 'Bring your fabric & design — we stitch it perfectly. Custom measurements, perfect fit every time.' },
  { icon: '✨', name: 'Ladies Wear', desc: 'All types of ladies wear — kurtis, palazzos, dupattas, shararas & more. Latest trends always.' },
  { icon: '🎨', name: 'Embroidery Work', desc: 'Hand embroidery, zari work, mirror work & sequence embellishment. Traditional craft with modern designs.' },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our <span style={{ color: 'var(--rose)' }}>Services</span></h2>
          <div className="section-line" />
        </div>
        <div className="cat-grid">
          {services.map((s, i) => (
            <div key={i} className="cat-card">
              <div className="cat-card-body">
                <span className="cat-icon">{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <a href={`https://wa.me/919650557785?text=Hi! Interested in ${s.name}`} target="_blank" className="cat-book">Enquire →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}