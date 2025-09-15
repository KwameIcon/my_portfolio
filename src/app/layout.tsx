import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "@/store/provider";
import { GlobalMouseTracker } from "@/lib/layout";
import "primereact/resources/themes/lara-light-cyan/theme.css";



export const metadata: Metadata = {
  title: "KWAME ANAG-BEY - Portfolio",
  description: "Showcasing my work and projects",
};



export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Providers>
          <GlobalMouseTracker />
          {children}
        </Providers>
      </body>
    </html>
  );
}
