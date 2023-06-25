"use client";
import { UseContextPokemonProvider } from "@/context";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Header } from "@/components/Header/header";
import { GlobalStyle } from "@/style/globalStyled";
import { StylePagePokemon } from "@/style/stylePagePokemon";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UseContextPokemonProvider>
        <GlobalStyle />
        <StylePagePokemon />
        <body className={roboto.className}>
          <Header />
          {children}
        </body>
      </UseContextPokemonProvider>
    </html>
  );
}
