import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;

  @media (max-width: 770px) {
    height: 75px;
  }
`;

export const Tagheader = styled.header`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  background-color: white;
  gap: 1rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 5px;
  }
`;

export const TagLogo = styled.a`
  font-weight: 400;
  font-size: 35px;
  line-height: 150%;
  color: var(--third-color);
  transition: 0.2s linear;
  @media (max-width: 427px) {
    font-size: 30px;
  }
`;

export const InputContainer = styled.div`
  width: 352px;
  background-color: var(--second-color);
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    width: 100%;
    color: var(--text-color-1);
    font-size: 0.87rem;
    font-family: inherit;
    font-weight: 400;
    border: none;
    line-height: 22px;
    outline: none;
    background-color: var(--second-color);
  }
  svg {
    color: var(--text-color-1);
  }

  .searchIcon {
    cursor: pointer;
  }
  @media (max-width: 427px) {
    width: 90%;
  }
`;
