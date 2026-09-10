import { useState } from "react";

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

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
    };

    if (submitForm) {
      submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      >
        <option value="">Select a time</option>

        {availableTimes.map((availableTime) => (
          <option
            key={availableTime}
            value={availableTime}
          >
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
      />

    </form>
  );
}

export default BookingForm;