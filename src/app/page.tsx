"use client";
import { Pagination } from "@/components/PaginationAndFavorites";
import { PokemonsList } from "@/components/PokemonsList";

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
