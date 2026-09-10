import type { Metadata } from "next";
import { Bodoni_Moda, Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison 05 — Studio de Pilates Reformer à Bourg-en-Bresse",
  description:
    "Maison 05, une parenthèse pensée pour vous. Studio de Pilates Reformer à Bourg-en-Bresse. Bougez, respirez, partagez et prenez le temps de revenir à vous. Move with intention.",
  icons: {
    icon: "/logo-bordeaux.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${playfair.variable} ${bodoniModa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
