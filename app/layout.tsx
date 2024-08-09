import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Main from "@/components/main";

const urbanist = Urbanist ({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Findeter",
  description: "Registros Findeter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar/>
          <Main/>
          {children} 
      </body>
    </html>
  );
}
