import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

export function updateTimes(state, action) {
  const selectedDate = new Date(action);

  return window.fetchAPI(selectedDate);
}

export function initializeTimes() {
  const today = new Date();

  return window.fetchAPI(today);
}

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  );
}

export default Main;