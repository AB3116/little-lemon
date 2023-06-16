import TestimonialCard from "./TestimonialCard";
import "./styles/TestimonialCards.css";

const TestimonialCards = () => {
  const data = [
    {
      name: "John Lemonson",
      photo: "/images/john.png",
      message:
        "This cozy restaurant has left the best impressions! I recommend to everyone!",
    },
    {
      name: "Emma Dessertson",
      photo: "/images/emma.png",
      message:
        "It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service.",
    },
    {
      name: "Mustafa Khan",
      photo: "/images/mustafa.png",
      message:
        "Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert.",
    },
    {
      name: "Karen Pieman",
      photo: "/images/karen.png",
      message:
        "Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. Highly recommended.",
    },
  ];

  const myCards = data.map((card) => (
    <TestimonialCard
      key={card.name}
      name={card.name}
      photo={card.photo}
      message={card.message}
    />
  ));

  return <div className="testimonial-cards">{myCards}</div>;
};

export default TestimonialCards;
