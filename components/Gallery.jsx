const items = [
  { emoji: null, label: 'Anarkali Lehenga', image: '/images/anarkali1.jpg' },
  { emoji: null, label: 'Designer Blouse', image: '/images/blouse1.jpg' },
  { emoji: null, label: 'Simple Suit', image: '/images/suit1.jpg' },
  { emoji: null, label: 'Custom Stitching', image: '/images/stitching1.jpg' },
  { emoji: null, label: 'Embroidery Work', image: '/images/embroidery2.jpg' },
  { emoji: null, label: 'Ladies Wear', image: '/images/ladies1.jpg' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Gallery</h2>
          <div className="section-line" />
        </div>
        <div className="gallery-grid">
          {items.map((item, i) => (
            <div key={i} className="gallery-item" data-label={item.label} style={item.image ? { background: 'none' } : {}}>
              {item.image ? (
                <img src={item.image} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span>{item.emoji}</span>
              )}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(0,0,0,0.5))', color: 'white', fontSize: '13px', fontWeight: 500 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}