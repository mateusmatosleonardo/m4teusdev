import styled from "styled-components";
/* padding: ${(props) => props.p}; */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  padding: 1.8rem 2.4rem;
  border-radius: 18px;
  box-shadow: 0 18px 200px -60px #313030;
`;

export const WrapperImg = styled.div`
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const WrapperDesc = styled.div``;

export const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  padding: 0.4rem 0;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 1em;
  color: #515050;
  font-family: "Nunito", sans-serif;
  text-align: center;
  padding-bottom: 0.6rem;
`;

export const Text = styled.p`
  font-size: 1em;
  font-family: "Nunito", sans-serif;
  text-align: center;
  padding-bottom: 1.2rem;
`;

export const About = styled.p`
  text-align: center;
  font-family: "Nunito", sans-serif;
`;

export const WrapperLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-bottom: 1.2rem;
`;

export const WrapperInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperInfoText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1.2rem;
`;

export const TextNumbers = styled.p`
  font-size: 1.1em;
  padding-bottom: 0.8rem;
  font-family: "Nunito", sans-serif;
  color: #111;
  font-weight: bold;
`;

export const WrapperSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  padding-top: 0.8rem;
  margin: 0 auto;
`;

export const BgIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  border-radius: 14px;
  cursor: pointer;
  transition all .2s;
  &:hover {
    transform: scale(1.2) translateY(-5px);
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 0 auto;
  padding: 1.2rem 0 1.2rem 0;
`;
