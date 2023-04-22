import { render, screen, within, getNodeText, fireEvent} from '@testing-library/react';
import App from './App';
import BookingPage from './BookingPage';

const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

describe("Booking Form", () => {
  test('Validate initializeTimes and check that it has correct values', () => {
    render(<BookingPage />);
    const items = screen.getAllByTestId("res-time").map(getNodeText);
    expect(items).toEqual(initialTimes);
  })

  test('Validate that updateTimes returns same value provided in availableTimes array', () => {
    const changedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    render(<BookingPage />);
    const dateInput = screen.getByLabelText(/Choose date:/);
    fireEvent.change(dateInput, { target: { value: "2023-04-12" } });
    expect(dateInput).toHaveValue("2023-04-12");
    const optionsList = screen.getAllByTestId("res-time").map(getNodeText);
    expect(optionsList).toEqual(changedTimes);
  })

  test('Validate that updateTimes returns same value provided in availableTimes array', () => {
    render(<BookingPage />);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
  })
});
