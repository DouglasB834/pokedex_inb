import styled from "styled-components";

export const ContainerPaginacao = styled.div`
  display: flex;
  align-items: start;
  padding: 1.4rem 0;
  justify-content: space-between;

  .paginacao {
    display: flex;
    gap: 5px;
    align-items: center;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
`;

export const ContainerFavorite = styled.div`
  h3 {
    color: var(--text-color-1);
    margin-bottom: 1rem;
  }
`;
