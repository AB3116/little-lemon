import { createContext, useState } from "react";
import { getTimes } from "../utils";

export const FormDataContext = createContext();

function FormDataProvider({ children }) {
  const today = new Date().toISOString().split("T")[0];
  const [availableTimes, setAvailableTimes] = useState(getTimes(today));

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
        setAvailableTimes,
        today,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
}

export default FormDataProvider;
