import { useState } from "react";
import { About, Footer, Header } from "./components"

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`w-full ${darkMode ? 'bg-zinc-800' : ''} bg-white h-screen`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
