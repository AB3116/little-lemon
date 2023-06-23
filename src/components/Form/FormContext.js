import { createContext, useState, useReducer } from "react";
import { fetchAPI, getTimes } from "../utils";

export const FormDataContext = createContext();

function FormDataProvider({ children }) {
  const today = new Date();

  const initializeTimes = (date) => {
    return fetchAPI(date);
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "GRAB_TIMES":
        return getTimes(action.value);
      default:
        return state;
    }
  };

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes(today)
  );

  const [formData, setFormData] = useState({
    date: today,
    time: availableTimes[0],
    number: "4",
    occasion: "birthday",
  });

  return (
    <FormDataContext.Provider
      value={{
        formData,
        setFormData,
        availableTimes,
        dispatch,
        today,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
}

export default FormDataProvider;
