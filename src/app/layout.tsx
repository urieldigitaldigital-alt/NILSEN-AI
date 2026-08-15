import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
    subsets: ["latin"],
    });

    const geistMono = Geist_Mono({
      variable: "--font-geist-mono",
        subsets: ["latin"],
        });

        const bricolage = Bricolage_Grotesque({
          variable: "--font-bricolage",
            subsets: ["latin"],
            });

            export const metadata: Metadata = {
              title: "NilsenAI - Descarga videos de TikTok sin marca de agua",
                description:
                    "Pega el enlace del video y descargalo en maxima calidad, sin marca de agua y sin registrarte.",
                    };

                    export default function RootLayout({ children }: { children: React.ReactNode }) {
                      return (
                          <html
                                lang="es"
                                      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
                                          >
                                                <body className="nai min-h-full flex flex-col">{children}</body>
                                                    </html>
                                                      );
                                                      }
                                                      
