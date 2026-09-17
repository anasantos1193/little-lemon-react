import { useState } from "react";

function BookingForm({
  availableTimes = [],
  dispatch,
  submitForm,
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");
  const [seating, setSeating] = useState("Indoor");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    setDate(selectedDate);

    if (dispatch) {
      dispatch(selectedDate);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
      seating,
      firstName,
      lastName,
      email,
      phone,
    };

    if (submitForm) {
      submitForm(formData);
    }
  };

  return (
    <form
      className="reservation-form"
      onSubmit={handleSubmit}
    >
      <div className="booking-section">
        <h2>Select your table</h2>

        <div className="booking-grid">

          <div className="form-group">
            <label htmlFor="res-date">
              Choose date
            </label>

            <input
              id="res-date"
              type="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-time">
              Choose time
            </label>

            <select
              id="res-time"
              value={time}
              onChange={(event) =>
                setTime(event.target.value)
              }
              required
            >
              <option value="">
                Select a time
              </option>

              {availableTimes.map(
                (availableTime) => (
                  <option
                    key={availableTime}
                    value={availableTime}
                  >
                    {availableTime}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests">
              Number of guests
            </label>

            <input
              id="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(event) =>
                setGuests(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">
              Occasion
            </label>

            <select
              id="occasion"
              value={occasion}
              onChange={(event) =>
                setOccasion(event.target.value)
              }
            >
              <option value="Birthday">
                Birthday
              </option>

              <option value="Anniversary">
                Anniversary
              </option>

              <option value="Engagement">
                Engagement
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>
        </div>

        <div className="seating-options">
          <label
            className={
              seating === "Indoor"
                ? "seating-card selected"
                : "seating-card"
            }
          >
            <input
              type="radio"
              name="seating"
              value="Indoor"
              checked={seating === "Indoor"}
              onChange={(event) =>
                setSeating(event.target.value)
              }
            />

            <span className="seating-icon">⌂</span>

            <div>
              <strong>Indoor seating</strong>
              <small>
                Comfortable restaurant seating
              </small>
            </div>
          </label>

          <label
            className={
              seating === "Outdoor"
                ? "seating-card selected"
                : "seating-card"
            }
          >
            <input
              type="radio"
              name="seating"
              value="Outdoor"
              checked={seating === "Outdoor"}
              onChange={(event) =>
                setSeating(event.target.value)
              }
            />

            <span className="seating-icon">☀</span>

            <div>
              <strong>Outdoor seating</strong>
              <small>
                Enjoy your meal outside
              </small>
            </div>
          </label>
        </div>
      </div>

      <div className="customer-section">
        <h2>Your details</h2>

        <div className="booking-grid">
          <div className="form-group">
            <label htmlFor="first-name">
              First name
            </label>

            <input
              id="first-name"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(event) =>
                setFirstName(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">
              Last name
            </label>

            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(event) =>
                setLastName(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="+351 900 000 000"
              value={phone}
              onChange={(event) =>
                setPhone(event.target.value)
              }
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="reservation-submit"
      >
        Confirm Reservation
      </button>
    </form>
  );
}

export default BookingForm;