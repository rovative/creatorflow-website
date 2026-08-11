import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'Creator Flow — One app. Every platform. Zero switching.',
  description: 'Creator Flow is a social media scheduling app. Schedule and publish content to TikTok, Instagram, YouTube and more from one place.',
  metadataBase: new URL('https://createaflow.app'),
  openGraph: {
    title: 'Creator Flow',
    description: 'One app. Every platform. Zero switching.',
    url: 'https://createaflow.app',
    siteName: 'Creator Flow',
    images: [{ url: '/logo.png', width: 512, height: 512 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Creator Flow',
    description: 'Creator Flow is a social media scheduling application. Schedule and publish content to TikTok, Instagram, YouTube and more from one dashboard. Automatically publish to multiple platforms at once.',
    applicationCategory: 'SocialNetworkingApplication',
    url: 'https://createaflow.app',
    operatingSystem: 'Web',
  };

  return (
    <html lang="en" className={geist.variable}>
      <head>
        <meta name="application-name" content="Creator Flow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
