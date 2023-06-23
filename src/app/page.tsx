"use client";
import { Pagination } from "@/components/Pagination";
import { PokemonsList } from "@/components/PokemonsList";
import { MainContainer, Container } from "./containerPage";

// import styles from "./page.module.css";

export default function Home() {
  return (
    //className={styles.main}
    <MainContainer>
      <Container>
        <Pagination />
        <hr />
        <PokemonsList />
      </Container>
    </MainContainer>
  );
}
