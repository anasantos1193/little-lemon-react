import BookingForm from "./BookingForm";

function BookingPage({
  availableTimes,
  dispatch,
  submitForm,
}) {
  return (
    <section>
      <h1>Reserve a Table</h1>
      <p>Choose your reservation details below.</p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;