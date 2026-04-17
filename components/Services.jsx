const services = [
  { icon: '👗', name: 'Anarkali Lehenga', desc: 'Beautiful Anarkali lehenga in various designs, colors & fabrics. Perfect for festivals, weddings & special occasions.', image: '/images/anarkali1.jpg' },
  { icon: '👚', name: 'Designer Blouse', desc: 'Trendy designer blouses with intricate embroidery, sequence work & modern cuts. Custom fitting guaranteed.', image: '/images/blouse1.jpg' },
  { icon: '🥻', name: 'Simple Suit', desc: 'Elegant simple suits for daily wear & casual outings. Comfortable fabric with perfect finishing.', image: '/images/suit1.jpg' },
  { icon: '🧵', name: 'Custom Stitching', desc: 'Bring your fabric & design — we stitch it perfectly. Custom measurements, perfect fit every time.', image: '/images/stitching1.jpg' },
  { icon: '✨', name: 'Ladies Wear', desc: 'All types of ladies wear — kurtis, palazzos, dupattas, shararas & more. Latest trends always.', image: '/images/ladies1.jpg' },
  { icon: '🎨', name: 'Embroidery Work', desc: 'Hand embroidery, zari work, mirror work & sequence embellishment. Traditional craft with modern designs.', image: '/images/embroidery2.jpg' },
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
              <div className="cat-card-img" style={{ height: '180px', overflow: 'hidden', background: '#f5ede8' }}>
                <img src={s.image} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
              <div className="cat-card-body">
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