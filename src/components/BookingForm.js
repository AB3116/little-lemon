import "./styles/BookingForm.css";

import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(4);
  const [occasion, setOccasion] = useState("birthday");

  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch({ type: date });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
