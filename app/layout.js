import './globals.css';

export const metadata = {
  title: 'Sui Dhaaga | Anarkali Lehenga, Designer Blouse | Anarkali, Delhi',
  description: 'Sui Dhaaga — Anarkali Lehenga, Designer Blouse, Simple Suit & ladies wear in Anarkali, Delhi. Custom stitching, quality fabric. Visit us near MCD Ward 108.',
  keywords: 'sui dhaaga, anarkali lehenga, designer blouse, simple suit, ladies wear anarkali, tailor anarkali, stitching anarkali, custom lehenga delhi, anarkali boutique, anarkali cloth shop',
  openGraph: {
    title: 'Sui Dhaaga | Anarkali Lehenga & Designer Blouse | Anarkali, Delhi',
    description: 'Anarkali Lehenga, Designer Blouse, Simple Suit & ladies wear. Custom stitching available. Anarkali, Delhi.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sui Dhaaga',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sui Dhaaga | Anarkali Lehenga & Designer Blouse | Anarkali, Delhi',
    description: 'Anarkali Lehenga, Designer Blouse, Simple Suit & ladies wear. Custom stitching available.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#c4726b" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}