import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Load Inter font for non-Apple devices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Kavish Shah - Full-stack Python Developer & AI Engineer | Professional Portfolio",
    template: "%s | Kavish Shah Portfolio"
  },
  description: "Professional portfolio of Kavish Shah - Computer Science Honors Student & Software Engineer at Arizona State University. Experienced in AI/ML, full-stack development, and IoT systems. Available for internships and full-time roles.",
  keywords: [
    "Kavish Shah",
    "Full-stack Developer", 
    "Python Developer",
    "AI Engineer",
    "Portfolio",
    "Software Developer",
    "Machine Learning",
    "IoT Developer",
    "Web Development",
    "Next.js",
    "React",
    "FastAPI",
    "Django",
    "Automation",
    "LangChain",
    "Smart India Hackathon",
    "Freelancer",
    "AI Chatbot",
    "Professional Portfolio",
    "Developer Portfolio",
    "Tech Portfolio",
    "Internship",
    "Python Automation",
    "Web Scraping",
    "API Development"
  ],
  authors: [
    {
      name: "Kavish Shah",
      url: "https://thekavishshah.github.io/",
    },
  ],
  creator: "Kavish Shah",
  publisher: "Kavish Shah",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thekavishshah.github.io/",
    title: "Kavish Shah - Computer Science Student & Software Engineer | ASU",
    description: "Professional portfolio showcasing AI/ML projects, full-stack development, and IoT systems. ASU Barrett Honors student with internship experience at FarmX Inc. and Dark Alpha Capital.",
    siteName: "Kavish Shah Portfolio",
    images: [
      {
        url: "https://thekavishshah.github.io/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Kavish Shah - Professional Portfolio with AI Chatbot",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavish Shah - Computer Science Student & Software Engineer",
    description: "Professional portfolio showcasing AI/ML projects, full-stack development, and IoT systems. ASU Barrett Honors student available for internships.",
    creator: "@thekavishshah",
    site: "@thekavishshah",
    images: [{
      url: "https://thekavishshah.github.io/portfolio.png",
      alt: "Kavish Shah Professional Portfolio"
    }],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://thekavishshah.github.io/",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://thekavishshah.github.io/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Kavish Shah",
              "jobTitle": "Computer Science Student & Software Engineer",
              "url": "https://thekavishshah.github.io/",
              "image": "https://thekavishshah.github.io/profile.jpg",
              "sameAs": [
                "https://github.com/thekavishshah",
                "https://linkedin.com/in/thekavishshah",
                "https://x.com/thekavishshah"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Arizona State University"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Arizona State University"
              },
              "knowsAbout": [
                "Python Development",
                "Machine Learning",
                "AI Engineering",
                "Full Stack Development",
                "IoT Systems",
                "Web Development",
                "Data Science"
              ],
              "description": "Computer Science Honors student at Arizona State University with software engineering internship experience at FarmX Inc. and Dark Alpha Capital. Specialized in AI/ML, full-stack development, and IoT systems."
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}