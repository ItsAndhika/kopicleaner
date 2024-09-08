import About from "./components/About"
import Brewing from "./components/Brewing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"

const App = () => {
  return (
    <>
    <Header />
      <main>
        <Hero />
        <div className="bg-secondary">
          <Products />
          <Brewing />
          <About />
        </div>
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
