import styled from "styled-components";

export const Habilites = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  li {
    border-bottom: 1px solid var(--third-color);
    width: 100%;
    display: flex;
    p {
      font-size: 1rem;
    }
  }
`;

export const GrafitStatus = styled.ul`
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
  /* flex-direction: column; */
  gap: 1rem;
  font-size: 1rem;
  width: 100%;
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
  span {
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
  }
  border-bottom: 1px solid var(--fifth-color);
  margin-bottom: 5px;
`;
