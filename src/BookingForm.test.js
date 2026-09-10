import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders Choose date label", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const labelElement = screen.getByText("Choose date");

  expect(labelElement).toBeInTheDocument();
});