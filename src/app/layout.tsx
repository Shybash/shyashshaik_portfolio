import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Shybash | Software Engineer Portfolio",
  description:
    "Associate Software Engineer specializing in Node.js, microservices architecture, and cloud computing. Building scalable backend systems with AWS, Docker, and modern web technologies.",
  keywords: [
    "shaik shybash",
    "shybash",
    "portfolio",
    "software engineer",
    "full stack developer",
    "node.js",
    "microservices",
    "aws certified",
    "backend developer",
    "react developer",
  ],
  authors: [{ name: "Shaik Shybash" }],
  creator: "Shaik Shybash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          id="favicon"
          rel="shortcut icon"
          href="/assets/images/favicon.png"
          type="image/x-png"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
