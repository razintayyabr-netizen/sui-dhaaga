const items = [
  { emoji: '👗', label: 'Anarkali Lehenga' },
  { emoji: '👚', label: 'Designer Blouse' },
  { emoji: '🥻', label: 'Simple Suit' },
  { emoji: '🧵', label: 'Custom Stitching' },
  { emoji: '✨', label: 'Embroidery Work' },
  { emoji: '👒', label: 'Ladies Wear' },
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
            <div key={i} className="gallery-item" data-label={item.label}>{item.emoji}</div>
          ))}
        </div>
      </div>
    </section>
  );
}