import { brewing } from "@/lib/data"

const Brewing = () => {
  return (
    <section id="about" className="container flex flex-col text-center mt-20 gap-5 p-10">
        <h3 className="font-spacemono">Brewing Guides</h3>
        <h1 className="text-3xl font-bold font-dmsans">Mastering Art of Coffee Brewing</h1>
        <p className="font-spacemono">Brewing the perfect cup of coffee is an art form. Explore our comprehensive brewing guides to learn the techniques and equipment needed to elevate your coffee experience at home.</p>
        <img src="/img/brewing.webp" alt="Brewing" className="rounded-xl" />
        <ul className="text-left flex flex-col gap-5 mt-10">
            {brewing.map(item => (
                <li>
                    <h4 className="font-semibold text-xl font-dmsans">{item.title}</h4>
                    <p className="font-spacemono">{item.desc}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Brewing