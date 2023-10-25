import { Hero, Footer, Header, Nav, About } from './components'

function App() {

  return (
    <div className="flex bg-zinc-900">
      <Nav />
      <main className={'w-full min-h-screen bg-zinc-900'}>
        <Header />
        <Hero />
        <About />
        <Footer />
      </main>
    </div>
  )
}

export default App
