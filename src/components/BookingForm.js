import "./styles/BookingForm.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch, submitAPI }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(4);
  const [occasion, setOccasion] = useState("birthday");

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    dispatch({
      type: "GRAB_TIMES",
      payload: { date: new Date(selectedDate) },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("booked_slots")) || [];

    existingBookings.push(formData);

    localStorage.setItem("booked_slots", JSON.stringify(existingBookings));
    
    const resp = submitAPI(formData);
    if (resp) {
      navigate("/confirmedbooking", { replace: true });
    }
  };

  return (
    <div className="form-container">
      <form
        style={{ display: "grid", maxWidth: "500px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          min={new Date().toISOString().split("T")[0]}
          value={date}
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        >
          {availableTimes &&
            availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your Reservation"
          className="button form-variant"
        />
      </form>
    </div>
  );
};

export default BookingForm;
