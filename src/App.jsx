import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black">
      <div className="text-center text-[10px] xs:text-xs sm:text-sm tracking-widest uppercase mt-6 sm:mt-10 px-4 max-w-4xl mx-auto leading-relaxed">
        conveys that there are many things the world, or society in general, still needs to
        understand or improve upon...Curious to learn more...
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-center mt-3 sm:mt-4 font-serif px-4 break-words">
        ALIN SHARMA
      </h1>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  )
}

export default App
