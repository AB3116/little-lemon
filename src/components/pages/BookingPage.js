import { useReducer, useEffect } from "react";
import BookingForm from "../BookingForm";
import Header from "../Header";
import Footer from "../Footer";
import { fetchAPI, submitAPI } from "../utils";

const BookingPage = () => {
  // Initializes times of today's date when the page is first loaded.
  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  // Returns only available times on a selected date.
  const fetchTimes = (date) => {
    const allTimes = fetchAPI(date);
    const bookedTimes = localStorage.length > 0 ? JSON.parse(localStorage.getItem("booked_slots")) : [];
    const availableTimes = [];
    if (bookedTimes["date"] === date.toISOString().split("T")[0]) {
      for (let i = 0; i < allTimes.length; i++) {
        if (bookedTimes["time"].includes(allTimes[i])) {
          continue;
        }
        availableTimes.push(allTimes[i]);
      }

      return availableTimes;
    }
    return allTimes;
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "GRAB_TIMES":
        return fetchTimes(action.payload.date);
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitAPI={submitAPI}
      />
      <Footer />
    </>
  );
};

const BookingSlot = () => {
  return <>BookingSlot</>;
};

export default BookingPage;
