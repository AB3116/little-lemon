import { useReducer } from "react";
import BookingForm from "../BookingForm";
import Header from "../Header";
import Footer from "../Footer";
import { fetchAPI, submitAPI } from "../utils";

const BookingPage = () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "GRAB_TIMES":
        return fetchAPI(action.data);
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default BookingPage;
