import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../Nav";

describe("Nav", () => {
  it('displays "Reservations" option', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const reservationsOption = screen.getByText("Reservations");
    expect(reservationsOption).toBeInTheDocument();
  });
});
