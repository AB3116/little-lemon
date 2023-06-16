import "./styles/Card.css";
import DeliveryIcon from "../static/delivery.png";
import PropTypes from "prop-types";

const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={imageUrl} alt={title.toString()} />
      </div>
      <div className="card-text">
        <div className="card-header">
          <h2>{title}</h2>
          <h2 className="price">{price}</h2>
        </div>
        <div className="card-description">{description}</div>
        <div className="card-footer">
          <h2>Order a delivery</h2>
          <img src={DeliveryIcon} alt="Delivery Icon" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default Card;
