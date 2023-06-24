"use client";

// import { ContainerHeader, InputContainer, TagLogo, Tagheader } from "./styled";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const Header = () => {
  const handleSearch = (event: string) => {
    console.log(event);
  };

  return (
    <div className="container-header ">
      <header className="tag-header">
        <a className="tag-logo" href="/">
          Pokedex INB
        </a>

        <div>
          <div className="input-container">
            <input
              placeholder="Procurando por algo especifico ?"
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="searchIcon"> 🔍</span>
          </div>
        </div>
      </header>
    </div>
  );
};
