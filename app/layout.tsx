import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Sora, Roboto_Mono, Lora } from "next/font/google";
// @ts-ignore
import "./global.css";
import { Head } from "next/document";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
      <body className={`${sora.className} ${sora.variable} ${robotoMono.variable} ${lora.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
