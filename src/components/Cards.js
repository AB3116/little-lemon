import "./styles/Cards.css";
import Card from "./Card";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Bruschetta",
      imageUrl: "/images/bruchetta.png",
      description:
        "Bruschetta is a classic Italian appetizer that is easy to make at home. Toasted bread is topped with tomatoes, Parmesan cheese, garlic, and fresh basil.",
      price: "$15.99",
    },
    {
      id: 2,
      title: "Greek Salad",
      imageUrl: "/images/greek salad.png",
      description:
        "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.",
      price: "$12.99",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      imageUrl: "/images/lemon dessert.png",
      description:
        "Lemon just adds such wonderful freshness and zing to recipes, and that goes for the best lemon desserts and other lemon recipes.",
      price: "$9.99",
    },
  ];

  const myCards = cards.map((card) => (
    <Card
      key={card.id}
      title={card.title}
      imageUrl={card.imageUrl}
      description={card.description}
      price={card.price}
    />
  ));

  return <div className="cards-container">{myCards}</div>;
};

export default Cards;
