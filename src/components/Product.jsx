export default function Product({ product, products })  {
  const handleBuy = () => {
    const actualCat = localStorage.getItem("actualCat");
    if (actualCat === product.id) return alert("Você já está com esse gato equipado");
    const points = localStorage.getItem("poi ts");
    if (points > product.price) return alert("Você não tem pontos suficientes")
    localStorage.setItem("points", product.price - points);
    localStorage.setItem("actualCat", product.id);
  }
  return (
    <button onClick={handleBuy} className="rounded-lg bg-gray-200 flex items-center hover:scale-110 flex-col p-3 break-words">
      <h1 className="font-bold text-xl">{product.name}</h1>
      <img className="rounded-lg" src={product.image} alt={product.name}/>
      <span><strong>{product.price}</strong> pontos</span>
      <span>{product.points} pontos por clique</span>
    </button>
  )
}