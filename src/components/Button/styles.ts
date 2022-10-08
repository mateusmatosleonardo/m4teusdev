import styled from "styled-components";

export const Btn = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  min-width: 180px;
  padding: 0.4rem 0.6rem 0.4rem 0.6rem;
  border: none;
  border-radius: 16px;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  color: #fafafa;
  transition: ease-in-out 0.2s;
  &:hover {
    transform: translateY(-2px);
  }
`;
