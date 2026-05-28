import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robert Yu",
  description:
    "Personal homepage for Robert Yu, featuring AI-assisted systems, realtime products, secure personal tools, and media workflows.",
  openGraph: {
    title: "Robert Yu",
    description:
      "AI-assisted systems, realtime products, secure personal tools, and media workflows.",
    type: "website",
    url: "https://github.com/MayoPickle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
