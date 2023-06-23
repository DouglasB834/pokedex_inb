import { UseContextPokemonProvider } from "@/context";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Header } from "@/components/Header/header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UseContextPokemonProvider>
        <body className={roboto.className}>
          <Header />
          {children}
        </body>
      </UseContextPokemonProvider>
    </html>
  );
}
