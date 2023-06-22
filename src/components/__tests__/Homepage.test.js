import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Components
import NavBar from "../Nav"
import CallToAction from "../CallToAction";

// Tests
describe("NavBar", () => {
  it('displays "Reservations" option', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const reservationsOption = screen.getByText("Reservations");
    expect(reservationsOption).toBeInTheDocument();
  });
});

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
