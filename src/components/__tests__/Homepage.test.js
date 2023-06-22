import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Tested components
import NavBar from "../Nav";
import CallToAction from "../CallToAction";
import Footer from "../Footer";


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

describe("Footer", () => {
  it('displays "Reservations" option and redirects to "/booking" on click; it also verifies if clicking on home option takes back to home page', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const reservationsOption = screen.getByText("Reservations");
    expect(reservationsOption).toBeInTheDocument();

    fireEvent.click(reservationsOption);
    expect(window.location.pathname).toContain("/booking");

    const homeOption = screen.getByText("Home");
    fireEvent.click(homeOption);
    expect(window.location.pathname).not.toContain("/booking");
  });
});
