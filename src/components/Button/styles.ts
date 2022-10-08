import styled from "styled-components";

export const Btn = styled.a`
  text-decoration: none;
  min-width: 162px;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
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
