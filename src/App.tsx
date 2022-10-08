import * as S from './styles';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import Me from './assets/me.png';
import Button from './components/Button';

function App() {

  function sendMessage() {
    return <link rel="stylesheet" href="https://api.whatsapp.com/send?1=pt_BR&phone=5588981890344" />
  }

  return (
    <S.Container>
      <S.WrapperImg>
        <S.Img src={Me} alt="autor" />
      </S.WrapperImg>
      <S.WrapperDesc>
        <S.Title>Mateus Leonardo</S.Title>
        <S.SubTitle>Software Developer</S.SubTitle>
        <S.About>Estudante de ciência da computação,
          com uma gama de certificações no ramo da tecnologia e com mais
          de 2 anos de experiência profissional como desenvolvedor Front-End
          e Mobile
        </S.About>
      </S.WrapperDesc>
      {/* <S.WrapperInfo>
        <S.WrapperInfoText>
          <S.TextNumbers>37</S.TextNumbers>
          <S.Text>SEGUIDORES</S.Text>
        </S.WrapperInfoText>
        <S.WrapperInfoText>
          <S.TextNumbers>+2 ANOS</S.TextNumbers>
          <S.Text>EXPERIÊNCIA</S.Text>
        </S.WrapperInfoText>
        <S.WrapperInfoText>
          <S.TextNumbers>+30</S.TextNumbers>
          <S.Text>PROJETOS</S.Text>
        </S.WrapperInfoText>
      </S.WrapperInfo> */}
      <S.WrapperButtons>
        <Button style={{
          'background': 'linear-gradient(45deg, #1da1f2, #0e71c8)'
        }} title='Entrar em contato' />
      </S.WrapperButtons>
      <S.WrapperSocial>
        <a href="https://www.instagram.com/m4teus_leonardo/">
          <S.BgIcon style={{
            'background': 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)'
          }}>
            <FaInstagram color='#fafafa' />
          </S.BgIcon>
        </a>
        <a href="https://www.linkedin.com/in/mateusmatosleonardo/">
          <S.BgIcon style={{
            'background': 'linear-gradient(45deg, #1da1f2, #0e71c8)'
          }}>
            <FaLinkedinIn color='#fafafa' />
          </S.BgIcon>
        </a>
        <a href="https://github.com/mateusmatosleonardo">
          <S.BgIcon style={{
            'background': 'linear-gradient(45deg, #333333, #626b73)'
          }}>
            <FaGithub color='#fafafa' />
          </S.BgIcon>
        </a>
      </S.WrapperSocial>
    </S.Container>
  )
}

export default App
