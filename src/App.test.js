import { initializeTimes, updateTimes } from "./Main";

beforeEach(() => {
  window.fetchAPI = jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
  ]);
});

test("initializeTimes returns available times from fetchAPI", () => {
  const times = initializeTimes();

  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
  ]);

  expect(window.fetchAPI).toHaveBeenCalled();
});

test("updateTimes returns available times for selected date", () => {
  const state = [];

  const selectedDate = "2026-09-10";

  const result = updateTimes(state, selectedDate);

  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
  ]);

  expect(window.fetchAPI).toHaveBeenCalled();
});