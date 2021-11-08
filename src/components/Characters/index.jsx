import CharCard from "../CharCard";
import "./style.css";

const Characters = ({ charList }) => {
  return (
    <div className="all-content">
      <h1>Meus Personagens</h1>
      <div className="character-list">
        {charList.map((element, index) => (
          <CharCard person={element} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
