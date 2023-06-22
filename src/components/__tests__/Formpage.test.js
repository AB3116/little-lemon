import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { FormDataContext } from "../Form/FormContext";
import FormikForm from "../FormikForm";

describe("FormikForm", () => {
  it("should render all labels correctly", () => {
    const formData = {
      date: "2023-06-22",
      time: "17:00",
      number: "4",
      occasion: "birthday",
    };

    const { getByLabelText } = render(
      <FormDataContext.Provider value={{ formData }}>
        <FormikForm />
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
        <FormikForm />
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
});
