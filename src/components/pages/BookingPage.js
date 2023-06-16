import { useReducer } from "react";
import BookingForm from "../BookingForm";
import Header from "../Header";
import Footer from "../Footer";

const BookingPage = () => {
  // const availableSlots = [
  //   {
  //     date: "2023-06-17",
  //     slots: ["21:00", "22:00", "23:00"],
  //   },
  //   {
  //     date: "2023-06-18",
  //     slots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
  //   },
  //   {
  //     date: "2023-06-16",
  //     slots: ["21:00", "22:00"],
  //   },
  // ];

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "2023-06-16":
        return ["21:00", "22:00", "23:00"];
      case "2023-06-17":
        return ["21:00", "22:00"];
      case "2023-06-18":
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    return [];
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
