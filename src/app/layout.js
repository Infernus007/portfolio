import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jash Naik - Cybersecurity Engineer & Cloud Developer",
  description: "Cybersecurity engineer and cloud developer specializing in secure, scalable digital infrastructure. Expert in building resilient systems and security solutions.",
  keywords: "cybersecurity, cloud developer, security engineer, fullstack developer, digital infrastructure, secure systems",
  authors: [{ name: "Jash Naik" }],
  creator: "Jash Naik",
  metadataBase: new URL('https://jash-naik.vercel.app'),
  openGraph: {
    title: "Jash Naik - Cybersecurity Engineer & Cloud Developer",
    description: "Cybersecurity engineer and cloud developer specializing in secure, scalable digital infrastructure.",
    url: "https://jash-naik.vercel.app",
    siteName: "Jash Naik Portfolio",
    images: [
      {
        url: "/images/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Jash Naik - Cybersecurity Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jash Naik - Cybersecurity Engineer & Cloud Developer",
    description: "Cybersecurity engineer and cloud developer specializing in secure, scalable digital infrastructure.",
    images: ["/images/me.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jash Naik",
    "jobTitle": "Cybersecurity Engineer & Cloud Developer",
    "description": "Cybersecurity engineer and cloud developer specializing in secure, scalable digital infrastructure.",
    "url": "https://jash-naik.vercel.app",
    "email": "jashnaik2004@gmail.com",
    "telephone": "+91 9875074738",
    "sameAs": [
      "https://github.com/Infernus007",
      "https://www.linkedin.com/in/jash-naik-7612b8162/"
    ],
    "knowsAbout": [
      "Cybersecurity",
      "Cloud Development",
      "Digital Infrastructure",
      "Security Engineering",
      "Full Stack Development"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://jash-naik.vercel.app" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
