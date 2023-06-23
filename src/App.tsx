import * as Style from './styles';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Me from './assets/me.jpeg';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Description": "Hello, I'm Mateus! Computer science student and mobile developer with React Native. 🤓",
        }
      },
      pt: {
        translation: {
          "Description": "Olá, eu sou Mateus! Estudante de ciência da computação e desenvolvedor mobile com React Native. 🤓",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App() {

  const { t } = useTranslation();

  return (
    <Style.Container>
      <Style.WrapperAvatar>
        <Style.Avatar src={Me} />
      </Style.WrapperAvatar>
      <Style.Description>
        {t('Description')}
      </Style.Description>
      <Style.WrapperSocialIcons>
        <Style.IconLink href='https://www.linkedin.com/in/mateusmatosleonardo'>
          <FaLinkedinIn size={40} color='#fafafa' />
        </Style.IconLink>
        <Style.IconLink href='https://github.com/mateusmatosleonardo'>
          <FaGithub size={40} color='#fafafa' />
        </Style.IconLink>
        <Style.IconLink href='https://instagram.com/m4teus.dev?igshid=MzNlNGNkZWQ4Mg=='>
          <FaInstagram size={40} color='#fafafa' />
        </Style.IconLink>
      </Style.WrapperSocialIcons>
    </Style.Container>
  )
}

export default App
