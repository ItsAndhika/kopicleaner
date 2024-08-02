import { about } from "@/lib/data"

const About = () => {
  return (
    <section id="about" className="container flex flex-col text-center mt-20 gap-5 p-10">
        <h3 className="font-spacemono">About Kopicleaner</h3>
        <h1 className="text-3xl font-bold font-dmsans">Crafting the Perfect Cup, One Bean at a Time</h1>
        <p className="font-spacemono">At Kopicleaner, we are passionate about sourcing and roasting the finest specialty coffee beans from around the world. Our team of experienced roasters and baristas work tirelessly to ensure every cup of Kopicleaner is a true delight for the senses. From the rich aroma to the smooth, balanced flavor, we are committed to delivering an exceptional coffee experience with every sip.</p>
        <img src="/img/about.webp" alt="About" className="rounded-xl" />
        <ul className="text-left flex flex-col gap-5 mt-10">
            {about.map(item => (
                <li>
                    <h4 className="font-semibold text-xl font-dmsans">{item.title}</h4>
                    <p className="font-spacemono">{item.desc}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default About