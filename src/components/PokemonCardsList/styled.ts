import styled from "styled-components";

export const StyledPookemonCards = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 250px;
  cursor: pointer;
  border: solid 1px var(--third-color);
  padding: 5px;
  color: var(--text-color-1);
  font-family: inherit;
  border-radius: 5px;

  figcaption {
    width: 120px;
    display: flex;
    justify-content: center;
    background-color: var(--fourth-color);
    border-radius: 50%;
    img {
      max-width: 100%;
      height: 100px;
      object-fit: cover;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    > p {
      font-size: 0.9rem;
    }
    > h3 {
      font-size: 1.2rem;
    }
    div {
      span + span {
        margin-left: 1rem;
      }
    }
  }
`;
