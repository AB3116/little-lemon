import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

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
