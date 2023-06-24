import styled from "styled-components";

export const Habilites = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  li {
    border-bottom: 1px solid var(--third-color);
    width: 100%;
    display: flex;

    p {
      font-family: inherit;
      font-weight: 600;
      font-size: 1rem;
    }
  }
`;

export const GrafitStatus = styled.ul`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  flex-direction: column;
  display: flex;
  padding: 10px 0;
  font-size: 0.75em;
  font-weight: 600;
  border-top: 1px solid var(--border-color);
`;

interface StatusProps {
  status: number;
  name: string;
}

export const ListStatus = styled.li`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
  width: 100%;
  font-family: inherit;
  p {
    font-size: 1rem;
    width: 40px;
    text-align: center;
    margin-right: 5px;
    color: ${({ name }: StatusProps) =>
      name == "hp"
        ? "var(--hp-color)"
        : name == "attack"
        ? "var(--attack-color)"
        : name == "defense"
        ? "var(--defense-color)"
        : name == "special-attack"
        ? "var(--spAtack-color)"
        : name == "special-defense"
        ? "var(--spDefense-color)"
        : "var(--speed-color)"};
  }
  .number-stat {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    height: 1.1rem;
    background-color: ${({ name }: StatusProps) =>
      name == "hp"
        ? "var(--hp-color)"
        : name == "attack"
        ? "var(--attack-color)"
        : name == "defense"
        ? "var(--defense-color)"
        : name == "special-attack"
        ? "var(--spAtack-color)"
        : name == "special-defense"
        ? "var(--spDefense-color)"
        : "var(--speed-color)"};
    color: var(--text-color-1);
    width: ${({ status }: StatusProps) => 0.4 * status}%;
    border-radius: 0px 5px 5px 0px;
    span {
      margin-left: 5px;
    }
  }
  border-bottom: 1px solid var(--fifth-color);
  margin-bottom: 5px;
`;

export const ContainerSpecies = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--sixth-color);
  width: 60%;
  min-width: 300px;
  max-width: 500px;
  padding: 6px 1rem;
  margin: 0 10px 5px 0;
  border-radius: 5px;
  font-family: inherit;
  h2 {
    color: var(--fifth-color);
  }

  .info-species {
    border: solid 2px var(--border-color);
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;

    p {
      font-size: 1rem;
      font-weight: 500;
      span {
        color: var(--fifth-color);
        font-weight: 400;
      }
    }

    ul li {
      display: flex;
      gap: 1rem;
      padding: 5px 0;
      color: var(--fifth-color);
    }
  }

  .tip-info {
    h3 {
      color: var(--fifth-color);
      margin-bottom: 1rem;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      border-bottom: 2px solid var(--border-color);
      margin-bottom: 1rem;
    }
  }
`;
