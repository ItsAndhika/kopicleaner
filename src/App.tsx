import Hero from "./components/Hero"
import Products from "./components/Products"

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-10">
        <Hero />
        <Products />
      </main>
    </>
  )
}

export default App
