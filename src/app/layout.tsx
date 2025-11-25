import type { Metadata } from "next";
import { Manrope, Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RentalCar",
  description: "Каталог авто для оренди з цінами, описами та фотографіями.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
