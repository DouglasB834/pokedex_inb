import styled from "styled-components";

export const StyledPookemonCards = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  width: 250px;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  font-family: inherit;
  color: var(--text-color-1);
  background-color: var(--bg-cards-color);
  border: solid 2px var(--border-color-2);
  padding: 1rem 0;
  transition: 0.3s linear;
  :hover {
    background-color: var(--fifth-color);
  }
  figure {
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

  .light {
    display: block;
    position: absolute;
  }

  /*estilo light*/
  .light:nth-child(1) {
    /*1o span*/
    background: linear-gradient(90deg, transparent, rgb(109, 3, 248));
    top: 0;
    left: -100px;
    width: 150px;
    height: 5px;
    animation: girar1 2s linear infinite;
    animation-delay: 0.1s;
  }
  @keyframes girar1 {
    0% {
      left: -100;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  .light:nth-child(3) {
    /*2o span*/
    background: linear-gradient(200deg, transparent, rgb(7, 23, 253));
    right: -100px;
    bottom: 0;
    width: 150px;
    height: 5px;
    animation: girar3 2s linear infinite;
    animation-delay: 0.1s;
  }

  @keyframes girar3 {
    0% {
      right: -100;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  .light:nth-child(2) {
    /*2o span*/
    background: linear-gradient(180deg, transparent, rgb(114, 7, 253));
    right: 0;
    top: -100px;
    width: 5px;
    height: 150px;
    animation: girar2 2s linear infinite;
    animation-delay: 0.9s;
  }

  @keyframes girar2 {
    0% {
      top: -100;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  .light:nth-child(4) {
    /*2o span*/
    background: linear-gradient(360deg, transparent, rgb(7, 23, 253));
    bottom: -100px; /*testa com 0*/
    left: 0px;
    width: 5px;
    height: 150px;
    animation: girar4 2s linear infinite;
    animation-delay: 0.9s;
  }

  @keyframes girar4 {
    0% {
      bottom: -100;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
