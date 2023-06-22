import { render, screen } from "@testing-library/react";
import { FormDataContext } from "../Form/FormContext";
import BookingForm from "../Form/BookingForm";

describe("BookingForm component", () => {
  it("verifies all labels are rendered correctly", () => {
    // Mocked context value
    const mockContextValue = {
      formData: {
        date: "2023-06-22",
        time: "18:00",
        number: "4",
        occasion: "birthday",
      },
      setFormData: jest.fn(),
      availableTimes: ["18:00", "19:00", "20:00"],
      setAvailableTimes: jest.fn(),
      today: "2023-06-22",
    };

    render(
      <FormDataContext.Provider value={mockContextValue}>
        <BookingForm />
      </FormDataContext.Provider>
    );

    // Labels for date, time, number, and occasion
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
});
