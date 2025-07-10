import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FirstSky-Concept",
  description: "designed by Quaved",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
