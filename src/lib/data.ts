type BaseType = {
    title: string,
    desc: string
}

type BrewingType = {
    title: string,
    desc: string
}

type MenuType = {
    title: string,
    href: string
}

const products: Array<BaseType> = [
    {
        title: "Signature Blend",
        desc: "Our signature blend combines the best beans from Central and South America, creating a rich and balanced flavor profile."
    },
    {
        title: "Single Origin Offerings",
        desc: "Explore our selection of single origin coffees, each showcasing the unique terroir and processing methods of their respective regions."
    },
    {
        title: "Limited Edition Roasts",
        desc: "Our limited edition roasts feature rare and exceptional beans, offering a truly unique coffee experience."
    },
]

const brewing: Array<BrewingType> = [
    {
        title: "Drip Coffee Brewing",
        desc: "Learn the optimal water temperature, grind size, and brew time for a perfect drip coffee."
    },
    {
        title: "French Press Brewing",
        desc: "Discover the art of French press brewing, including water temperature, steep time, and more."
    },
    {
        title: "Pour Over Brewing",
        desc: "Master the pour over technique with our step-by-step guide, ensuring a perfectly balanced cup."
    },
]

const about: Array<BaseType> = [
    {
        title: "Sustainable Sourcing",
        desc: "We work directly with coffee farmers to ensure fair trade practices and sustainable growing methods, supporting the local communities."
    },
    {
        title: "Artisanal Roasting",
        desc: "Our small-batch roasting process allows us to carefully develop the unique flavors and aromas of each coffee origin."
    },
    {
        title: "Commitment to Quality",
        desc: "From bean to brew, we are committed to delivering the highest quality coffee experience, ensuring every cup is a true delight."
    },
]

const menu: Array<MenuType> = [
    {
        title: "Home",
        href: "#"
    },
    {
        title: "Products",
        href: "#products"
    },
    {
        title: "Brewing Guides",
        href: "#brewing"
    },
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Contact",
        href: "#contact"
    },
]

export {products, brewing, about, menu}