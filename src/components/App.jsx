import { useContext } from "react";
import { getTimes } from "./utils";
import "./App.css";
import { FormDataContext } from "./Form/FormContext";

const App = ({ setPage }) => {
  const { formData, setFormData, availableTimes, setAvailableTimes, today } =
    useContext(FormDataContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setPage(1);
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      date: e.target.value,
    });
    setAvailableTimes(getTimes(e.target.value));
  };

  return (
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
          placeholder="Date"
          required={true}
        />
        <small>Example: 01/01/2000</small>
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
          required={true}
          placeholder="Time"
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <small>Example: 18:00</small>
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
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          required={true}
          placeholder="Number of guests"
        />
        <small>Example: 4</small>
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
          required={true}
          placeholder="Occasion"
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="other">Other</option>
        </select>
        <small>Example: Birthday</small>
      </div>
      <div className="submit-container">
        <input type="submit" className="button btn-form" value="Add Details" />
      </div>
    </form>
  );
};

export default App;
