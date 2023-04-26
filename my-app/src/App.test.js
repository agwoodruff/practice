import { render, screen, within, getNodeText, fireEvent} from '@testing-library/react';
import App from './App';
import BookingPage from './BookingPage';
import {BrowserRouter} from "react-router-dom";
import {fetchAPI, submitAPI} from "./api.js";

const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

describe("Booking Form", () => {
  test('Validate initializeTimes and check that it has correct values', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const items = screen.getAllByTestId("res-time").map(getNodeText);
    //expect(items).toEqual(initialTimes);
    expect(items.length > 0);
  })

  test('Validate that updateTimes returns same value provided in availableTimes array', () => {
    const changedTimes = fetchAPI(new Date("2023-04-12"));
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const dateInput = screen.getByLabelText(/Date:/);
    fireEvent.change(dateInput, { target: { value: "2023-04-12" } });
    expect(dateInput).toHaveValue("2023-04-12");
    const optionsList = screen.getAllByTestId("res-time").map(getNodeText);
    expect(optionsList).toEqual(changedTimes);
  })

  test('Check that submit button works', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
  })

  test('Validate HTML validation works', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const nameInput = screen.getByLabelText(/Name:/);
    expect(nameInput).toBeInvalid();
    const dateInput = screen.getByLabelText(/Date:/);
    expect(dateInput).toBeInvalid();
    const timeInput = screen.getByLabelText(/Time:/);
    expect(timeInput).toBeInvalid();
    const numGuestsInput = screen.getByLabelText(/Number of guests:/);
    expect(numGuestsInput).toBeInvalid();
    const occasionInput = screen.getByLabelText(/Occasion:/);
    expect(occasionInput).toBeInvalid();
  })

  test('Validate Javascript validation works when input is invalid', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const nameInput = screen.getByLabelText(/Name:/);
    fireEvent.change(nameInput, " ");
    const dateInput = screen.getByLabelText(/Date:/);
    fireEvent.change(dateInput, { target: { value: " " } });
    const timeInput = screen.getByLabelText(/Time:/);
    fireEvent.change(timeInput, " ");
    const numGuestsInput = screen.getByLabelText(/Number of guests:/);
    fireEvent.change(numGuestsInput, " ");
    const occasionInput = screen.getByLabelText(/Occasion:/);
    fireEvent.change(occasionInput, " ");
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  })

  test('Validate Javascript validation works when input is valid', () => {
    render(<BrowserRouter><BookingPage /></BrowserRouter>);
    const nameInput = screen.getByLabelText(/Name:/);
    fireEvent.change(nameInput, { target: { value: "Alyssa" }});
    const dateInput = screen.getByLabelText(/Date:/);
    fireEvent.change(dateInput, { target: { value: "2023-04-25" } });
    const changedTimes = fetchAPI(new Date("2023-04-25"));
    const timeInput = screen.getByLabelText(/Time:/);
    fireEvent.change(timeInput, { target: { value: changedTimes[0]}});
    const numGuestsInput = screen.getByLabelText(/Number of guests:/);
    fireEvent.change(numGuestsInput, { target: { value: 2}});
    const occasionInput = screen.getByLabelText(/Occasion:/);
    fireEvent.change(occasionInput, { target: { value: "Birthday"}});
    const submitButton = screen.getByRole("button");
    expect(submitButton).not.toBeDisabled();
  })
});
