import About from "./components/About"
import Hero from "./components/Hero"
import Products from "./components/Products"

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-10">
        <Hero />
        <div className="bg-secondary">
          <Products />
          <About />
        </div>
      </main>
    </>
  )
}

export default App
