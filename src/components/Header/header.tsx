"use client";

import { ContainerHeader, InputContainer, TagLogo, Tagheader } from "./styled";
import { Roboto } from "next/font/google";
import { BsSearchHeart } from "react-icons/bs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const Header = () => {
  const handleSearch = (event: string) => {
    console.log(event);
  };

  return (
    <ContainerHeader>
      <Tagheader>
        <TagLogo className={roboto.className} href="/">
          Pokedex INB
        </TagLogo>

        <div>
          <InputContainer>
            <input
              placeholder="Procurando por algo especifico ?"
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="searchIcon"> 🔍{/* <BsSearchHeart /> */}</span>
          </InputContainer>
        </div>
      </Tagheader>
    </ContainerHeader>
  );
};
