import "./style.css";

const CharCard = ({ person }) => {
  let personName = person.name;

  if (person.name.length > 15) {
    personName = person.name.substr(0, 15) + "...";
  }
  return (
    <div className={person.status}>
      <p>{personName}</p>
      <img src={person.image} alt="" />
      <p className="specie-name">{person.species}</p>
    </div>
  );
};

export default CharCard;
