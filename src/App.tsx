import {
  Hero,
  Footer,
  Header,
  Nav,
  About,
  Experience
} from './components'

function App() {

  return (
    <div className="flex bg-zinc-900">
      <Nav />
      <main className={'w-full min-h-screen bg-zinc-900'}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Footer />
      </main>
    </div>
  )
}

export default App
