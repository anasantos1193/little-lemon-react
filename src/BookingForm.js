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

  const isFormValid =
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 10 &&
    occasion !== "";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

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
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      aria-label="Table reservation form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      >
        <option value="">Select a time</option>

        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(event) => setGuests(Number(event.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        disabled={!isFormValid}
        aria-label="On Click"
      />
    </form>
  );
}

export default BookingForm;