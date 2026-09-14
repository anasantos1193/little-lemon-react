import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const availableTimes = ["17:00", "18:00"];

const setup = () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  return {
    mockDispatch,
    mockSubmitForm,
  };
};

test("renders Choose date label", () => {
  setup();

  const labelElement = screen.getByText("Choose date");

  expect(labelElement).toBeInTheDocument();
});

test("date input is required", () => {
  setup();

  const dateInput = screen.getByLabelText("Choose date");

  expect(dateInput).toBeRequired();
});

test("time select is required", () => {
  setup();

  const timeSelect = screen.getByLabelText("Choose time");

  expect(timeSelect).toBeRequired();
});

test("guests input has correct validation attributes", () => {
  setup();

  const guestsInput = screen.getByLabelText("Number of guests");

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select is required", () => {
  setup();

  const occasionSelect = screen.getByLabelText("Occasion");

  expect(occasionSelect).toBeRequired();
});

test("submit button is disabled when form is invalid", () => {
  setup();

  const submitButton = screen.getByDisplayValue(
    "Make Your Reservation"
  );

  expect(submitButton).toBeDisabled();
});

test("submit button is enabled when form is valid", () => {
  setup();

  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const guestsInput = screen.getByLabelText("Number of guests");

  fireEvent.change(dateInput, {
    target: { value: "2026-09-14" },
  });

  fireEvent.change(timeSelect, {
    target: { value: "17:00" },
  });

  fireEvent.change(guestsInput, {
    target: { value: "2" },
  });

  const submitButton = screen.getByDisplayValue(
    "Make Your Reservation"
  );

  expect(submitButton).toBeEnabled();
});