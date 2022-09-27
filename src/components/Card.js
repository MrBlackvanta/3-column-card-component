import "./Card.scss";

function Card(props) {
  return (
    <div className={`card ${props.className}`}>
      <img src={props.icon} alt="sedans car icon" className="card-icon" />
      <h1 className="card-heading">{props.heading}</h1>
      <p className="card-description">{props.description}</p>
      <button className={`card-btn ${props.btn}`}>Learn More</button>
    </div>
  );
}

export default Card;
