import type { Metadata } from "next";

import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "ReCircle Lab",
  description: "Internal tools built by the ReCircle tech team for EPR compliance, logistics, and operations."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
