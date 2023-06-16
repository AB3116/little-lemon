import "./styles/CustomersSay.css"
import TestimonialCards from "./TestimonialCards"

const Testimonial = () => {
  return (
    <div className="testimonial-container">
        <div className="testimonial-header">
            Testimonials
        </div>
        <div className="tm-cards">
            <TestimonialCards />
        </div>
    </div>
  )
}

export default Testimonial