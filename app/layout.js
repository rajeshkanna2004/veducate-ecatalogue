import './globals.css';

export const metadata = {
  title: 'Veducate — The Future of Engineering Education',
  description: 'Veducate transforms engineering education with smart learning, immersive VR labs, hands-on coding practice, and career acceleration — all in one integrated platform.',
  keywords: 'engineering education, VR labs, smart learning, coding platform, EdTech, immersive learning',
  openGraph: {
    title: 'Veducate — The Future of Engineering Education',
    description: 'Transform your institution with Smart Learning + VR + hands-on practice.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Veducate — The Future of Engineering Education',
    description: 'Transform your institution with Smart Learning + VR + hands-on practice.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
