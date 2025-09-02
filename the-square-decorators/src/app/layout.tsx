import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Square Decorators - Custom Upholstery & Window Treatments",
  description: "Custom upholstery, window treatments, slipcovers, cushions, pillows, and furniture restoration in Franklin Square, NY. Professional services for residential and commercial clients.",
  keywords: "upholstery, window treatments, slipcovers, furniture restoration, Franklin Square NY, custom cushions, pillows",
  authors: [{ name: "The Square Decorators" }],
  openGraph: {
    title: "The Square Decorators - Custom Upholstery & Window Treatments",
    description: "Professional upholstery and window treatment services in Franklin Square, NY",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
