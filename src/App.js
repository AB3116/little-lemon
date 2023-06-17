import { Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import BookingPage from "./components/pages/BookingPage";
import ConfirmedBooking from "./components/pages/ConfirmedBooking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingPage />}></Route>
      <Route path="/confirmedbooking" element={<ConfirmedBooking />}></Route>
    </Routes>
  );
}

export default App;
