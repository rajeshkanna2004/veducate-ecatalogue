import './globals.css';

export const metadata = {
  title: 'Veducate — The Future of Engineering Education',
  description: 'Veducate transforms engineering education with AI-powered learning, immersive VR labs, hands-on coding practice, and career acceleration — all in one integrated platform.',
  keywords: 'engineering education, VR labs, AI learning, coding platform, EdTech, immersive learning',
  openGraph: {
    title: 'Veducate — The Future of Engineering Education',
    description: 'Transform your institution with AI + VR + hands-on learning.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
