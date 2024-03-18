export default function Product({ product, points, onBuy, type })  {
  const handleBuy = () => {
    onBuy(product);
  };

  return (
    <button onClick={handleBuy} className="rounded-lg bg-gray-200 flex items-center hover:scale-110 flex-col p-3 break-words gap-1 transition-all">
      <h1 className="font-bold text-xl">{product.name}</h1>
      <img className="rounded-lg w-36 h-36" src={product.image} alt={product.name}/>
      <span><strong>{product.price}</strong> pontos</span>
      {type === "click" ? (
          <>
            <span>{product.points} pontos por clique</span>
            <span className="text-start">{product.cooldown} Milisegundos de cooldown</span>
          </>
        ) : (
          <span><strong>{product.points}</strong> ponto{product.points === 1 ? "" : "s"} a cada {product.cooldown} milisegundos</span>
        )
      }
    </button>
  )
}