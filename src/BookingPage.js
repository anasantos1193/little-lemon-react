import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <div className="booking-container">
        <div className="booking-heading">
          <h1>Reserve a Table</h1>
          <p>Choose your reservation details below.</p>
        </div>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;