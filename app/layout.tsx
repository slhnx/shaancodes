import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Inter_Tight, Roboto_Mono } from "next/font/google";
// @ts-ignore
import "./global.css";
import { Head } from "next/document";

const inter = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Shaan Alam | Full Stack Developer",
    template: "%s | Shaan Alam",
  },
  description:
    "I am a MCA student at NIT Raipur and full-stack developer. I build scalable web applications and share insights on web development, programming, and technology.",

  appleWebApp: {
    title: "Shaan Alam",
    capable: true,
    statusBarStyle: "default",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Shaan Alam | Full Stack Developer",
    description:
      "I am a MCA student at NIT Raipur building scalable web applications and sharing technical insights.",
    url: "https://shaancodes.dev",
    siteName: "Shaan Alam",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shaan Alam | Full Stack Developer",
    description:
      "I am a MCA student at NIT Raipur building scalable web applications and sharing technical insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${robotoMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
