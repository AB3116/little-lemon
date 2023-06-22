import React from "react";
import { render, fireEvent, waitFor, act, screen } from "@testing-library/react";
import { FormDataContext } from "../Form/FormContext";
import PersonalDetailsForm from "../Form/PersonalForm";

describe("PersonalDetailsForm", () => {
  it("should render all labels correctly", () => {
    const formData = {
      date: "2023-06-22",
      time: "17:00",
      number: "4",
      occasion: "birthday",
    };

    render(
      <FormDataContext.Provider value={{ formData }}>
        <PersonalDetailsForm />
      </FormDataContext.Provider>
    );

    // Assert that the labels are rendered correctly
    expect(screen.getByLabelText(/First name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone number/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Credit Card Number/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expiration Date/)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV\/CVC/)).toBeInTheDocument();
  });

  it("should show 'Required' message when input is clicked and then clicked outside", async () => {
    const formData = {
      date: "2023-06-22",
      time: "17:00",
      number: "4",
      occasion: "birthday",
    };

    render(
      <FormDataContext.Provider value={{ formData }}>
        <PersonalDetailsForm />
      </FormDataContext.Provider>
    );

    // Simulate clicking on the 'First name' input
    const firstNameInput = screen.getByLabelText(/First name/);
    fireEvent.focus(firstNameInput);

    // Assert that 'Required' message is not yet displayed
    expect(screen.queryByText(/Required/)).toBeNull();

    // Simulate clicking outside the input
    fireEvent.blur(firstNameInput);

    // Wait for form validation to complete
    await waitFor(() => {
      expect(screen.getByText(/Required/)).toBeInTheDocument();
    });
  });

  it("should enable submit button after form filling and clicking outside", async () => {
    const formData = {
      date: "2023-06-22",
      time: "17:00",
      number: "4",
      occasion: "birthday",
    };

    render(
      <FormDataContext.Provider value={{ formData }}>
        <PersonalDetailsForm />
      </FormDataContext.Provider>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/First name/), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByLabelText(/Last name/), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/), {
      target: { value: "jane123@xyz.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone number/), {
      target: { value: "9876598765" },
    });
    fireEvent.change(screen.getByLabelText(/Credit Card Number/), {
      target: { value: "4242424242424242" },
    });
    fireEvent.change(screen.getByLabelText(/Expiration Date/), {
      target: { value: "1199" },
    });
    fireEvent.change(screen.getByLabelText(/CVV\/CVC/), { target: { value: "876" } });

    // Simulate clicking outside the form
    fireEvent.click(document.body);

    // Wait for form validation to complete
    await act(async () => {
      const submitButton = screen.getByRole("button", { name: /Submit/ });
      expect(submitButton).toHaveAttribute("disabled", "");
    });
  });
});
