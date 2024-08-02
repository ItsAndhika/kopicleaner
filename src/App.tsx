import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Products from "./components/Products"

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <div className="bg-secondary">
          <Products />
          <About />
        </div>
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
