import styled from "styled-components";

export const StyledPokemonList = styled.ul`
  display: grid;
  justify-content: space-around;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, 256px);
  margin-top: 1rem;
`;
