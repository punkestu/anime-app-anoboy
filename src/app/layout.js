import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import TheProvider from "../components/provider";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime App",
  description: "Anime App with anoboy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " relative"}>
        <NextUIProvider>
          <TheProvider>
            <Header />
            {children}
          </TheProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
