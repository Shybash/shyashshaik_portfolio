import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Shaik Shybash",
  description: "Welcome to Shaik Shybash's Portfolio. Associate Software Engineer and Full-Stack Web Developer.",
  keywords: [
    "shaik shybash",
    "shybash",
    "portfolio",
    "software engineer",
    "full stack dev",
    "microservices",
    "aws certified",
    "web developer"
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
    <html lang="en">
      <head>
        <link id="favicon" rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
