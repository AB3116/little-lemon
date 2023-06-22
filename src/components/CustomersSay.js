import "./styles/CustomersSay.css";
import TestimonialCards from "./TestimonialCards";

const CustomersSay = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-header">Testimonials</div>
      <div className="tm-cards">
        <TestimonialCards />
      </div>
    </div>
  );
};

export default CustomersSay;
