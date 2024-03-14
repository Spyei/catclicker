import Product from "./Product";

export default function Store({ points, products, onBuy, autocats }) {
  
  return (
    <section className="flex my-4 items-center flex-col border-2 rounded-lg p-6 m-2">
      <h1 className="text-2xl mb-2 font-bold">Loja de gatos</h1>
      <div className="gap-3 grid grid-cols-2">
        {products.map((product) => (
          <Product key={product.id} product={product} points={points} onBuy={onBuy} type="click" />
        ))}
      </div>
      <h1 className="text-2xl mb-2 my-3 font-bold">Loja de gatos automáticos</h1>
      <div className="gap-3 grid grid-cols-2">
        {autocats.map((product) => (
          <Product key={product.id} product={product} points={points} onBuy={onBuy} type="auto" />
        ))}
      </div>
    </section>
  )
}