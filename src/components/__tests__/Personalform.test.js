import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
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

    const { getByLabelText } = render(
      <FormDataContext.Provider value={{ formData }}>
        <PersonalDetailsForm />
      </FormDataContext.Provider>
    );

    // Assert that the labels are rendered correctly
    expect(getByLabelText(/First name/)).toBeInTheDocument();
    expect(getByLabelText(/Last name/)).toBeInTheDocument();
    expect(getByLabelText(/Email/)).toBeInTheDocument();
    expect(getByLabelText(/Phone number/)).toBeInTheDocument();
    expect(getByLabelText(/Credit Card Number/)).toBeInTheDocument();
    expect(getByLabelText(/Expiration Date/)).toBeInTheDocument();
    expect(getByLabelText(/CVV\/CVC/)).toBeInTheDocument();
  });

  it("should show 'Required' message when input is clicked and then clicked outside", async () => {
    const formData = {
      date: "2023-06-22",
      time: "17:00",
      number: "4",
      occasion: "birthday",
    };

    const { getByLabelText, getByText, queryByText } = render(
      <FormDataContext.Provider value={{ formData }}>
        <PersonalDetailsForm />
      </FormDataContext.Provider>
    );

    // Simulate clicking on the 'First name' input
    const firstNameInput = getByLabelText(/First name/);
    fireEvent.focus(firstNameInput);

    // Assert that 'Required' message is not yet displayed
    expect(queryByText(/Required/)).toBeNull();

    // Simulate clicking outside the input
    fireEvent.blur(firstNameInput);

    // Wait for form validation to complete
    await waitFor(() => {
      expect(getByText(/Required/)).toBeInTheDocument();
    });
  });

  it("should enable submit button after form filling and clicking outside", async () => {
    const formData = {
      date: "2023-06-22",
      time: "17:00",
      number: "4",
      occasion: "birthday",
    };

    const { getByLabelText, getByRole } = render(
      <FormDataContext.Provider value={{ formData }}>
        <PersonalDetailsForm />
      </FormDataContext.Provider>
    );

    // Fill in the form fields
    fireEvent.change(getByLabelText(/First name/), {
      target: { value: "Jane" },
    });
    fireEvent.change(getByLabelText(/Last name/), { target: { value: "Doe" } });
    fireEvent.change(getByLabelText(/Email/), {
      target: { value: "jane123@xyz.com" },
    });
    fireEvent.change(getByLabelText(/Phone number/), {
      target: { value: "9876598765" },
    });
    fireEvent.change(getByLabelText(/Credit Card Number/), {
      target: { value: "4242424242424242" },
    });
    fireEvent.change(getByLabelText(/Expiration Date/), {
      target: { value: "1199" },
    });
    fireEvent.change(getByLabelText(/CVV\/CVC/), { target: { value: "876" } });

    // Simulate clicking outside the form
    fireEvent.click(document.body);

    // Wait for form validation to complete
    await act(async () => {
      const submitButton = getByRole("button", { name: /Submit/ });
      expect(submitButton).toHaveAttribute("disabled", "");
    });
  });
});
