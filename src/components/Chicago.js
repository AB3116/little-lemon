import "./styles/Chicago.css";
import Image1 from "../static//Mario and Adrian A.png";
import Image2 from "../static/Mario and Adrian B.png";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <section className="about-content">
          <h1 className="about-title">Little Lemon</h1>
          <h3>Chicago</h3>
          <p className="about-text">
            One of America&apos;s most beloved restaurants, Little Lemon has
            welcomed guests to enjoy its contemporary American cuisine, warm
            hospitality, and unparalleled service in Chicago for over two
            decades. Chef Michael Anthony&apos;s ever-evolving seasonal menu
            showcases the restaurant&apos;s relationships with local farms and
            purveyors.
          </p>
        </section>
        <aside className="about-image-container">
          <img src={Image1} alt="" id="A" />
          <img src={Image2} alt="" id="B" />
        </aside>
      </div>
    </div>
  );
};

export default About;
