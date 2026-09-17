import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="confirmation-page">
      <div className="confirmation-card">

        <div className="confirmation-icon">
          ✓
        </div>

        <h1>Booking Confirmed!</h1>

        <p>
          Thank you! Your table reservation at
          Little Lemon has been successfully
          confirmed.
        </p>

        <div className="confirmation-divider"></div>

        <p className="confirmation-message">
          We look forward to welcoming you.
        </p>

        <Link
          to="/"
          className="confirmation-button"
        >
          Return to Home
        </Link>

      </div>
    </section>
  );
}

export default ConfirmedBooking;