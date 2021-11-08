import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setcharacterList] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
      .then((response) => response.json())
      .then((response) => setcharacterList(response.results));
  }, [next]);

  const nextPage = () => {
    setNext(next + 1);
  };

  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
    }
  };
  console.log(next);
  return (
    <div className="App">
      <Characters charList={characterList} />
      <div className="btn-flex">
        <button className="btn-page" onClick={previousPage}>
          Página anterior
        </button>
        <button className="btn-page" onClick={nextPage}>
          Pŕoxima página
        </button>
      </div>
    </div>
  );
}

export default App;
