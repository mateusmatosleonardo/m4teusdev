import { useState } from "react";
import { About, Footer, Header } from "./components"

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`w-full min-h-screen ${darkMode ? 'bg-zinc-800' : ''} bg-white`}
      style={{
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </main>
  )
}

export default App
