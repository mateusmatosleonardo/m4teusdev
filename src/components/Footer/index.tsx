import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = ({ darkMode }: any) => {
  return (
    <div className="mt-2 sm:mt-0 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <strong className={`text-gray-800 ${darkMode ? 'text-white' : ''}`}>Connect with me.</strong>
          <div className="flex flex-wrap sm:space-x-4 pt-4 space-x-2 font-medium lg:pt-0">
            <a href="https://www.linkedin.com/in/mateusmatosleonardo" className="hover:-translate-y-1 transition-all duration-300" target="_blank">
              <FaLinkedinIn size={35} className={`text-gray-800 hover:text-blue-500 ${darkMode ? 'text-white' : ''}`} />
            </a>
            <a href="https://twitter.com/m4teusmatos" className="hover:-translate-y-1 transition-all duration-300" target="_blank">
              <FaTwitter size={35} className={`text-gray-800 hover:text-blue-500 ${darkMode ? 'text-white' : ''}`} />
            </a>
            <a href="https://github.com/mateusmatosleonardo" className="hover:-translate-y-1 transition-all duration-300" target="_blank">
              <FaGithub size={35} className={`text-gray-800 hover:text-blue-500 ${darkMode ? 'text-white' : ''}`} />
            </a>
            <a href="https://instagram.com/m4teus.dev?igshid=MzNlNGNkZWQ4Mg==" className="hover:-translate-y-1 transition-all duration-300" target="_blank">
              <FaInstagram size={35} className={`text-gray-800 hover:text-blue-500 ${darkMode ? 'text-white' : ''}`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;