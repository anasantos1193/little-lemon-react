import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family owned Mediterranean restaurant, focused
            on traditional recipes served with a modern twist.
          </p>

          <Link to="/booking" className="reserve-button">
            Reserve a Table
          </Link>
        </div>

        <div className="hero-image-container">
          <img
            src="/restaurant (1).jpg"
            alt="Little Lemon restaurant"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;