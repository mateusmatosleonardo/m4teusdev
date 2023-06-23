import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 24px;
  gap: 30px;
`;

export const WrapperAvatar = styled.div`
  width: 300px;
  height: 300px;

  @media (max-width: 450px) {
    width: 200px;
    height: 200px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Description = styled.p`
  max-width: 800px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: rgb(245, 245, 239);
  text-align: center;

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const WrapperSocialIcons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 14px;
`;

export const IconLink = styled.a`
  display: inline-block;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;
