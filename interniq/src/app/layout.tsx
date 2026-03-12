import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InternIQ | AI Internship Platform",
  description:
    "InternIQ helps students optimise their CV, prepare for interviews, and target competitive internships smarter.",
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