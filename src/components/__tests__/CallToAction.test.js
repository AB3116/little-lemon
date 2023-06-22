import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CallToAction from "../CallToAction";

describe("CallToAction", () => {
  it('displays "Reserve a table" button and redirects to "/booking" on click', () => {
    render(
      <BrowserRouter>
        <CallToAction />
      </BrowserRouter>
    );

    const reserveButton = screen.getByText("Reserve a table");
    expect(reserveButton).toBeInTheDocument();

    fireEvent.click(reserveButton);
    expect(window.location.pathname).toContain("/booking");
  });
});
