import type { Metadata } from "next";
import "./globals.css";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "FormFiller - Fill Any Form in 10 Seconds",
  description: "Upload your form, and our AI will auto-fill it using your saved data. No more repetitive typing!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}