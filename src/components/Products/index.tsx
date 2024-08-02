import { products } from "@/lib/data"

const Products = () => {
  return (
    <section id="products" className="container flex flex-col bg-secondary text-center gap-3">
        <h3 className="mt-10">Discover Our Blends</h3>
        <h1 className="text-3xl font-bold font-dmsans">Explore Our Premium Coffee Offerings</h1>
        <p className="font-spacemono">Kopicoffee sources the finest coffee beans from around the world, carefully roasting them to bring out the unique flavors and aromas of each origin. Whether you prefer a bold and rich blend or a bright and fruity single origin, we have the perfect coffee for your taste buds.</p>
        <ul className="flex flex-col gap-5 text-left mt-10">
            {products.map(product => (
                <li>
                    <h4 className="font-semibold text-xl font-dmsans">{product.title}</h4>
                    <p className="font-spacemono">{product.desc}</p>
                </li>
            ))}
        </ul>
        <img src="/img/products.webp" alt="Products" className="rounded-xl mt-10" />
    </section>
  )
}

export default Products