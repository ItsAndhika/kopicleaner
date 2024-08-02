type BaseType = {
    title: string,
    desc: string
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

export {products, about}