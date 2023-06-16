import "./styles/TestimonialCard.css";
import PropTypes from "prop-types";

const TestimonialCard = ({ name, photo, message }) => {
  return (
    <div className="tm-card-container">
      <div className="tm-card-main">
        <div className="tm-card-msg">{message}</div>
      </div>
      <div className="tm-card-photo">
        <img src={photo} alt={name.toString()} />
      </div>
      <div className="tm-card-name">{name}</div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  photo: PropTypes.string,
};

export default TestimonialCard;
