import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./FormikForm.css";
import { setLocalStorage } from "./utils";
import { useContext, useState } from "react";
import { FormDataContext } from "./Form/FormContext";

const ValidationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email")
    .required("Required"),
  phone: Yup.string()
    .matches(
      /^(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/,
      "Please enter a valid phone number"
    )
    .required("Required"),
  creditcard: Yup.string()
    .matches(
      /^\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}$/,
      "Please enter a valid credit card number"
    )
    .required("Required"),
  exp: Yup.string()
    .matches(/^\d{2}[/ ]?\d{2}$/, "Please enter a valid expiration date")
    .required("Required"),
  cvv: Yup.string()
    .matches(/^\d{3}$/, "Please enter a valid CVV/CVC")
    .required("Required"),
});

const FormikForm = ({ setPage }) => {
  const { formData, setFormData, today, availableTimes } =
    useContext(FormDataContext);

  const [modal, setModal] = useState(false);

  return (
    <div className="form-container">
      {modal && (
        <div className={modal && "personal-form-overlay"}>
          <div className="modal-box">
            <p>Hooray! Your booking has been confirmed and locked in.</p>
            <div className="modal-buttons">
              <button
                style={{ background: "white", color: "var(--primary-color)" }}
              >
                Go home
              </button>
              <button>Make another reservation</button>
            </div>
          </div>
        </div>
      )}

      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          phone: "",
          creditcard: "",
          exp: "",
          cvv: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          // same shape as initial values
          setLocalStorage(formData);
          // console.log(values);
          setFormData({
            date: today,
            time: availableTimes[0],
            number: "4",
            occasion: "birthday",
          });
          resetForm();
          setModal(curr => !curr);
          setPage(0);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="fullname-container">
              <div className="fname-container">
                <label htmlFor="fname">
                  First name<span className="mandatory">&nbsp;*</span>
                </label>
                <Field
                  name="fname"
                  id="fname"
                  placeholder="First name"
                  className={touched.fname && errors.fname ? "fname-error" : ""}
                />
                <div className="messages">
                  <small>Example: John</small>
                  {touched.fname && errors.fname && (
                    <div className="error">{errors.fname}</div>
                  )}
                </div>
              </div>

              <div className="lname-container">
                <label htmlFor="lname">
                  Last name<span className="mandatory">&nbsp;*</span>
                </label>
                <Field
                  name="lname"
                  id="lname"
                  placeholder="Last name"
                  className={touched.lname && errors.lname ? "lname-error" : ""}
                />
                <div className="messages">
                  <small>Example: Doe</small>
                  {touched.lname && errors.lname && (
                    <div className="error">{errors.lname}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="email-container">
              <label htmlFor="email">
                Email<span className="mandatory">&nbsp;*</span>
              </label>
              <Field
                name="email"
                type="email"
                id="email"
                placeholder="Email"
                className={touched.email && errors.email ? "email-error" : ""}
              />
              <div className="messages">
                <small>Example: john@example.com</small>
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="phone-container">
              <label htmlFor="phone">
                Phone number<span className="mandatory">&nbsp;*</span>
              </label>
              <Field
                name="phone"
                type="phone"
                id="phone"
                placeholder="XXX-XXX-XXXX"
                className={touched.phone && errors.phone ? "phone-error" : ""}
              />
              <div className="messages">
                <small>Example: 123-456-7890</small>
                {touched.phone && errors.phone && (
                  <div className="error">{errors.phone}</div>
                )}
              </div>
            </div>

            <div className="creditcard-container">
              <label htmlFor="creditcard">
                Credit Card Number<span className="mandatory">&nbsp;*</span>
              </label>
              <Field
                name="creditcard"
                type="text"
                id="creditcard"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className={
                  touched.creditcard && errors.creditcard
                    ? "creditcard-error"
                    : ""
                }
              />
              <div className="messages">
                <small>Example: 1234-5678-9012-3456</small>
                {touched.creditcard && errors.creditcard && (
                  <div className="error">{errors.creditcard}</div>
                )}
              </div>
            </div>

            <div className="fullname-container">
              <div className="fname-container">
                <label htmlFor="exp">
                  Expiration Date<span className="mandatory">&nbsp;*</span>
                </label>
                <Field
                  name="exp"
                  id="exp"
                  placeholder="MM/YY"
                  className={touched.exp && errors.exp ? "fname-error" : ""}
                />
                <div className="messages">
                  <small>Example: 06/99</small>
                  {touched.exp && errors.exp && (
                    <div className="error">{errors.exp}</div>
                  )}
                </div>
              </div>

              <div className="lname-container">
                <label htmlFor="cvv">
                  CVV/CVC<span className="mandatory">&nbsp;*</span>
                </label>
                <Field
                  name="cvv"
                  id="cvv"
                  placeholder="XXX"
                  className={touched.cvv && errors.cvv ? "lname-error" : ""}
                />
                <div className="messages">
                  <small>Example: 123</small>
                  {touched.cvv && errors.cvv && (
                    <div className="error">{errors.cvv}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="submit-container">
              <button
                className="button btn-form"
                type="submit"
                disabled={
                  !(
                    touched.fname &&
                    touched.lname &&
                    touched.email &&
                    touched.phone &&
                    touched.creditcard &&
                    touched.exp &&
                    touched.cvv
                  ) ||
                  errors.fname ||
                  errors.lname ||
                  errors.email ||
                  errors.phone ||
                  errors.creditcard ||
                  errors.exp ||
                  errors.cvv
                }
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
