import Cards from "./Cards";
import "./styles/Specials.css";

const Specials = () => {
  return (
    <div className="highlights-container">
      <div className="highlights-header">
        <h1>This weeks specials!</h1>
        <button className="button btn-cta" type="button">
          Order Now
        </button>
      </div>
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
};

export default Specials;
