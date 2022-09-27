import Card from "./Card";
import sedans from "../images/icon-sedans.svg";
import suvs from "../images/icon-suvs.svg";
import luxury from "../images/icon-luxury.svg";
import "./CardBox.scss";

function CardBox() {
  return (
    <div className="card-box">
      <Card
        className="orange"
        icon={sedans}
        heading="Sedans"
        description="Choose a sedan for its affordability and excellent fuel economy.
        Ideal for cruising in the city or on your next road trip."
        btn="btn-orange"
      />
      <Card
        className="cyan"
        icon={suvs}
        heading="SUVs"
        description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road dventures."
        btn="btn-cyan"
      />
      <Card
        className="dark-cyan"
        icon={luxury}
        heading="Luxury"
        description="Cruise in the best car
        brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        btn="btn-dark-cyan"
      />
    </div>
  );
}

export default CardBox;
