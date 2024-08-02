const Hero = () => {
  return (
    <section className="container flex flex-col mt-20 gap-3">
        <h1 className="text-3xl font-bold tracking-tighter">Elevate Your Coffee Experience with Kopicleaner</h1>
        <p className="text-secondary-foreground">Kopicleaner offers a premium selection of specialty coffee beans, expertly roasted to bring out the best flavors and aromas. Discover the perfect cup for your morning ritual.</p>
        <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">Shop Now</a>
        <a href="#" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">Learn More</a>
        <img src="/img/hero.webp" alt="Coffee" className="rounded-xl" />
    </section>
  )
}

export default Hero