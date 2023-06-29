import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }: any) => {

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <div className="container px-4 py-6 mx-auto lg:max-w-4xl flex items-center justify-between ">
        <h1 className={`font-medium tracking-wider transition-colors text-gray-900 ${darkMode ? 'text-white' : ''} hover:text-blue-500 uppercase cursor-pointer`}>
          Mateus Dev
        </h1>
        <button onClick={toggleDarkMode}>
          {darkMode ?
            <FaSun size={22} className={`${darkMode ? 'text-white' : ''} text-gray-800`} /> :
            <FaMoon size={22} className="text-gray-800" />}
        </button>
      </div>
    </header>
  )
}

export default Header;