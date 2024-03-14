import { useState, useEffect } from "react";
import Store from "./components/Store";
import { cats, catsauto } from "./utils";

export default function App() {
  const [count, setCount] = useState(parseFloat(localStorage.getItem("points")) || 0);
  const [cat, setCat] = useState(cats.find((cat) => cat.id === (localStorage.getItem("actualCat") || "gatolegal")));
  const [automaticCat, setAutomaticCat] = useState(catsauto.find((autocat) => autocat.id === localStorage.getItem("autoCat")));
  const [click, setClick] = useState(false);

  useEffect(() => {
    localStorage.setItem("points", count);
  }, [count]);

  useEffect(() => {
    if (automaticCat) {
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + automaticCat.points);
      }, automaticCat.cooldown);

      return () => clearInterval(interval);
    }
  }, [automaticCat]);

  function handleAddPoints() {
    setClick(!click);
    setTimeout(() => {
      setCount(count + cat.points);
    }, cat.cooldown);
  }

  function handleBuy(product) {
    if (catsauto.map((a) => a.id).includes(product.id)) {
      if (count < product.price) return alert("Você não tem pontos suficientes");

      setCount(count - product.price);
      setAutomaticCat(product);
      localStorage.setItem("autoCat", product.id);
    } else {
      if (count < product.price) return alert("Você não tem pontos suficientes");

      setCount(count - product.price);
      setCat(product);
      localStorage.setItem("actualCat", product.id);
    }
  }
  
  return (
    <section className="flex flex-col w-screen items-center">
      <h1 className="font-bold text-2xl">Clique no gato</h1>
      <button className="flex items-center flex-col my-3" onClick={handleAddPoints}>
        <img src={cat.image} alt="Cat image" className={`rounded-lg transition-all ${click ? "scale-90" : null} h-1/2 w-1/2`} />
      </button>
      <div className="w-full flex text-center flex-col">
        <div>Pontos: <strong>{count}</strong></div>
        <span>{cat.points} ponto{cat.points === 1 ? null : "s"} a cada <strong>{cat.cooldown} milisegundos</strong> por click</span>
      </div>
      <Store autocats={catsauto} products={cats} points={count} onBuy={handleBuy} />
    </section>
  )
}