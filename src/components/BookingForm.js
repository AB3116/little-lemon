// import "./styles/BookingForm.css";

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const Page1 = ({ availableTimes, dispatch, submitAPI }) => {
//   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
//   const [time, setTime] = useState(availableTimes[0]);
//   const [guests, setGuests] = useState(4);
//   const [occasion, setOccasion] = useState("birthday");

//   const navigate = useNavigate();

//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value;
//     setDate(selectedDate);
//     dispatch({
//       type: "GRAB_TIMES",
//       payload: { date: new Date(selectedDate) },
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = {
//       date: date,
//       time: time,
//       guests: guests,
//       occasion: occasion,
//     };

//     const existingBookings =
//       JSON.parse(localStorage.getItem("booked_slots")) || [];

//     existingBookings.push(formData);

//     localStorage.setItem("booked_slots", JSON.stringify(existingBookings));

//     const resp = submitAPI(formData);
//     if (resp) {
//       navigate("/confirmedbooking", { replace: true });
//     }
//   };

//   return (
//     <div className="form-container">
//       <form
//         style={{ display: "grid", maxWidth: "500px", gap: "20px" }}
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="res-date">Choose date</label>
//         <input
//           type="date"
//           id="res-date"
//           min={new Date().toISOString().split("T")[0]}
//           value={date}
//           onChange={handleDateChange}
//         />
//         <label htmlFor="res-time">Choose time</label>
//         <select
//           id="res-time"
//           value={time}
//           onChange={(event) => setTime(event.target.value)}
//         >
//           {availableTimes &&
//             availableTimes.map((availableTime) => (
//               <option key={availableTime} value={availableTime}>
//                 {availableTime}
//               </option>
//             ))}
//         </select>
//         <label htmlFor="guests">Number of guests</label>
//         <input
//           type="number"
//           placeholder="1"
//           min="1"
//           max="10"
//           id="guests"
//           value={guests}
//           onChange={(event) => setGuests(event.target.value)}
//         />
//         <label htmlFor="occasion">Occasion</label>
//         <select
//           id="occasion"
//           value={occasion}
//           onChange={(event) => setOccasion(event.target.value)}
//         >
//           <option value="birthday">Birthday</option>
//           <option value="anniversary">Anniversary</option>
//         </select>
//         <input
//           type="submit"
//           value="Make Your Reservation"
//           className="button form-variant"
//         />
//       </form>
//     </div>
//   );
// };

// const Page2 = () => {
//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       email: "",
//       phoneNumber: "",
//       cardNumber: "",
//       expiryDate: "",
//       cvv: "",
//     },
//     validationSchema: Yup.object({
//       fullName: Yup.string().required("Full name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       phoneNumber: Yup.string().required("Phone number is required"),
//       cardNumber: Yup.string().required("Card number is required"),
//       expiryDate: Yup.string().required("Expiry date is required"),
//       cvv: Yup.string().required("CVV is required"),
//     }),
//     onSubmit: (values) => {
//       // Perform any necessary actions with the form data
//       console.log(values);
//     },
//   });

//   return (
//     <div className="form-container">
//       <form onSubmit={formik.handleSubmit}>
//         <label htmlFor="fullName">Full Name</label>
//         <input
//           type="text"
//           id="fullName"
//           name="fullName"
//           value={formik.values.fullName}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.fullName && formik.errors.fullName && (
//           <div className="error">{formik.errors.fullName}</div>
//         )}

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.email && formik.errors.email && (
//           <div className="error">{formik.errors.email}</div>
//         )}

//         <label htmlFor="phoneNumber">Phone Number</label>
//         <input
//           type="text"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formik.values.phoneNumber}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//           <div className="error">{formik.errors.phoneNumber}</div>
//         )}

//         <label htmlFor="cardNumber">Card Number</label>
//         <input
//           type="text"
//           id="cardNumber"
//           name="cardNumber"
//           value={formik.values.cardNumber}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.cardNumber && formik.errors.cardNumber && (
//           <div className="error">{formik.errors.cardNumber}</div>
//         )}

//         <label htmlFor="expiryDate">Expiry Date</label>
//         <input
//           type="text"
//           id="expiryDate"
//           name="expiryDate"
//           value={formik.values.expiryDate}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.expiryDate && formik.errors.expiryDate && (
//           <div className="error">{formik.errors.expiryDate}</div>
//         )}

//         <label htmlFor="cvv">CVV</label>
//         <input
//           type="text"
//           id="cvv"
//           name="cvv"
//           value={formik.values.cvv}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.cvv && formik.errors.cvv && (
//           <div className="error">{formik.errors.cvv}</div>
//         )}

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Page1;

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./styles/BookingForm.css";

const Page1 = ({ availableTimes, dispatch, submitAPI }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(4);
  const [occasion, setOccasion] = useState("birthday");
  const [showPage2, setShowPage2] = useState(false);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    dispatch({
      type: "GRAB_TIMES",
      payload: { date: new Date(selectedDate) },
    });
  };

  const handleSubmit = async (event) => {
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

    const resp = await submitAPI(formData);
    if (resp) {
      setShowPage2(true);
    }
  };

  if (showPage2) {
    return <Page2 />;
  }

  return (
    <div className="form-container">
      <form
        className="form"
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

const Page2 = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
      cardNumber: Yup.string().required("Card number is required"),
      expiryDate: Yup.string().required("Expiry date is required"),
      cvv: Yup.string().required("CVV is required"),
    }),
    onSubmit: (values) => {
      // Perform any necessary actions with the form data
      console.log(values);
    },
  });

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={formik.handleSubmit}
        style={{ display: "grid", maxWidth: "500px", gap: "20px" }}
      >
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="input-field"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div className="error">{formik.errors.fullName}</div>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className="error">{formik.errors.phoneNumber}</div>
        )}

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cardNumber && formik.errors.cardNumber && (
          <div className="error">{formik.errors.cardNumber}</div>
        )}

        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={formik.values.expiryDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.expiryDate && formik.errors.expiryDate && (
          <div className="error">{formik.errors.expiryDate}</div>
        )}

        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.cvv && formik.errors.cvv && (
          <div className="error">{formik.errors.cvv}</div>
        )}

        <button type="submit" className="button form-variant">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page1;
