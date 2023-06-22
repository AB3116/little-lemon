import { render } from "@testing-library/react";
import { FormDataContext } from "../Form/FormContext";
import App from "../App";

describe("App component", () => {
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

    const { getByLabelText } = render(
      <FormDataContext.Provider value={mockContextValue}>
        <App />
      </FormDataContext.Provider>
    );

    // Labels for date, time, number, and occasion
    const dateLabel = getByLabelText(/choose date/i);
    const timeLabel = getByLabelText(/choose time/i);
    const numberLabel = getByLabelText(/number of guests/i);
    const occasionLabel = getByLabelText(/occasion/i);

    // Assertion
    expect(dateLabel).toBeInTheDocument();
    expect(timeLabel).toBeInTheDocument();
    expect(numberLabel).toBeInTheDocument();
    expect(occasionLabel).toBeInTheDocument();
  });
});
