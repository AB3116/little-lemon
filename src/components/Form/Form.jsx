import { useState } from "react";
import BookingForm from "./BookingForm";
import PersonalForm from "./PersonalForm";
import "./Form.css";

function Form() {
  const [page, setPage] = useState(0);

  const FormTitles = ["Book Your Table", "Personal Details"];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <BookingForm setPage={setPage} />;
      case 1:
        return <PersonalForm setPage={setPage} />;
      default:
        return;
    }
  };

  return (
    <div>
      <div className="progress-bar"></div>
      <div className="form-container">
        <div className="header">{FormTitles[page]}</div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            className={`page-switch ${page === 0 ? "page-active" : ""}`}
            onClick={() => setPage(0)}
          >
            1
          </button>
          <button
            className={`page-switch ${page === 1 ? "page-active" : ""}`}
            onClick={() => setPage(1)}
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
