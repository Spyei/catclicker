import Product from "./Product";

export default function Store({ points, products }) {
  
  return (
    <section className="flex my-4 items-center flex-col border-2 rounded-lg p-3 w-[90%]">
      <h1 className="text-2xl mb-2 font-bold">Loja de gatos</h1>
      <div className="gap-3 grid grid-cols-2">
        {products.map((product) => (
          <Product products={products} product={product} />
        ))}
      </div>
    </section>
  )
}