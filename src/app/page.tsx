"use client";
import { Pagination } from "@/components/Pagination";
import { PokemonsList } from "@/components/PokemonsList";
import styles from "./page.module.css";

// import { MainContainer, Container } from "./containerPage";

export default function Home() {
  return (
    <main className="mainContainer">
      <div className="container">
        <Pagination />
        <hr />
        <PokemonsList />
      </div>
    </main>
  );
}
