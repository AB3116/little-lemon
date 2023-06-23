import { render, screen, fireEvent } from "@testing-library/react";
import { FormDataContext } from "../Form/FormContext";
import BookingForm from "../Form/BookingForm";

describe("BookingForm component", () => {
  it("verifies all labels are rendered correctly", () => {
    // Mocked context value
    const mockContextValue = {
      formData: {
        date: new Date(), // Updated date value
        time: "19:00", // Updated time value
        number: "4",
        occasion: "birthday",
      },
      setFormData: jest.fn(),
      availableTimes: ["18:00", "19:00", "20:00"],
      dispatch: jest.fn(),
      today: new Date(), // Updated today's date value
    };

    render(
      <FormDataContext.Provider value={mockContextValue}>
        <BookingForm />
      </FormDataContext.Provider>
    );

    // Updated labels for date, time, number, and occasion
    const dateLabel = screen.getByLabelText(/choose date/i);
    const timeLabel = screen.getByLabelText(/choose time/i);
    const numberLabel = screen.getByLabelText(/number of guests/i);
    const occasionLabel = screen.getByLabelText(/occasion/i);

    // Assertion
    expect(dateLabel).toBeInTheDocument();
    expect(timeLabel).toBeInTheDocument();
    expect(numberLabel).toBeInTheDocument();
    expect(occasionLabel).toBeInTheDocument();
  });

  it("updates form data when date is changed", () => {
    const mockContextValue = {
      formData: {
        date: new Date(),
        time: "19:00",
        number: "4",
        occasion: "birthday",
      },
      setFormData: jest.fn(),
      availableTimes: ["18:00", "19:00", "20:00"],
      dispatch: jest.fn(),
      today: new Date(),
    };

    render(
      <FormDataContext.Provider value={mockContextValue}>
        <BookingForm />
      </FormDataContext.Provider>
    );

    const dateInput = screen.getByLabelText(/choose date/i);
    const newDate = "2023-06-24";

    fireEvent.change(dateInput, { target: { value: newDate } });

    expect(mockContextValue.setFormData).toBeCalledWith({
      date: newDate,
      time: "19:00",
      number: "4",
      occasion: "birthday",
    });
    expect(mockContextValue.dispatch).toBeCalledWith({
      type: "GRAB_TIMES",
      value: new Date(newDate),
    });
  });
});
