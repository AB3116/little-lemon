import { useState } from "react";
import { setLocalStorage, getTimes } from "./utils";
import "./styles/BookingForm.css";

const BookingForm = () => {
  const today = new Date().toISOString().split("T")[0];
  const [availableTimes, setAvailableTimes] = useState(getTimes(today));

  const [formData, setFormData] = useState({
    date: today,
    time: availableTimes[0],
    number: "4",
    occasion: "birthday",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLocalStorage(formData);

    // Reset Form
    setFormData({
      date: today,
      time: "18:00",
      number: "4",
      occasion: "birthday",
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      date: e.target.value,
    });
    setAvailableTimes(getTimes(e.target.value));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="date-container">
          <label htmlFor="res-date">
            Choose date<span className="mandatory">&nbsp;*</span>
          </label>
          <input
            type="date"
            name="res-date"
            id="res-date"
            min={today}
            value={formData.date}
            onChange={handleDateChange}
          />
        </div>
        <div className="time-container">
          <label htmlFor="res-time">
            Choose time<span className="mandatory">&nbsp;*</span>
          </label>
          <select
            name="res-time"
            id="res-time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="number-container">
          <label htmlFor="res-number">
            Number of guests<span className="mandatory">&nbsp;*</span>
          </label>
          <input
            type="number"
            name="res-number"
            id="res-number"
            min="1"
            max="8"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
          />
        </div>
        <div className="occasion-container">
          <label htmlFor="res-occasion">Occasion</label>
          <select
            name="res-occasion"
            id="res-occasion"
            value={formData.occasion}
            onChange={(e) =>
              setFormData({ ...formData, occasion: e.target.value })
            }
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="submit-container">
          <input type="submit" className="button" value="Add Details" />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
