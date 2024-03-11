import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(parseFloat(localStorage.getItem("points")) || 0);

  useEffect(() => {
    localStorage.setItem("points", count);
  }, [count]);

  function handleAddPoints() {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }

  return (
    <section className="flex flex-col w-screen items-center">
      <button onClick={handleAddPoints}>
        <img src="https://cdn.discordapp.com/attachments/955900016436838440/1216747144308854827/86ad1a9e359f4970e48741dd1ffde549.jpg?ex=66018315&is=65ef0e15&hm=bcc54bfc0e1742ddb4aa6d109062e3dbaf247236a53497d00323773424bf4deb&" alt="Cat image" className="flex"/>
      </button>
      <div>{count}</div>
    </section>
  )
}