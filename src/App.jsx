import { useState, useEffect } from "react";
import Store from "./components/Store";

const cats = [
    {
      name: "Cozinheiro",
      image: "https://cdn.discordapp.com/attachments/955900016436838440/1217111130095489064/39df1e09db92ee24b17f5d9e991e10ec.jpg?ex=6602d612&is=65f06112&hm=1f531ad7d4d028c6992514ff6462b06df38765adcfcbbbc1d1c9fd3afc611535&",
      points: 3,
      price: 50,
      id: "cozinheiro",
      cooldown: 2000
    },
    {
      name: "Banho",
      image: "https://cdn.discordapp.com/attachments/955900016436838440/1217111651057275053/cd9d104731bdc33161faae5e2a8fe78f.jpg?ex=6602d68e&is=65f0618e&hm=ef8d5c6d30f40b9f909c31f866104796deb9dcb000a8913a5660e4a936fac15d&",
      points: 6,
      price: 100,
      id: "banho",
      cooldown: 2000
    },
    {
      name: "Inicial",
      image: "https://cdn.discordapp.com/attachments/955900016436838440/1216747144308854827/86ad1a9e359f4970e48741dd1ffde549.jpg?ex=66018315&is=65ef0e15&hm=bcc54bfc0e1742ddb4aa6d109062e3dbaf247236a53497d00323773424bf4deb&",
      points: 1,
      price: 0,
      id: "gatolegal",
      cooldown: 2000
    }
  ];

export default function App() {
  const [count, setCount] = useState(parseFloat(localStorage.getItem("points")) || 0);
  const [click, setClick] = useState(false);
  useEffect(() => {
    localStorage.setItem("points", count);
  }, [count]);

  const cat = cats.find((cat) => cat.id === (localStorage.getItem("actualCat") || "gatolegal"));

  function handleAddPoints() {
    setClick(!click);
    setTimeout(() => {
      setCount(count + cat.points);
    }, cat.cooldown);
  }
  
  return (
    <section className="flex flex-col w-screen items-center">
    <h1 className="font-bold text-2xl">Clique no gato</h1>
      <button className="flex items-center flex-col my-3" onClick={handleAddPoints}>
        <img src={cat.image} alt="Cat image" className={`rounded-lg transition-all ${click ? "scale-90" : null} h-1/2 w-1/2`}/>
      </button>
      <div>Pontos: <strong>{count}</strong></div>
      <Store products={cats} points={count} />
    </section>
  )
}