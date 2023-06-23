import Form from "../Form/Form";
import FormDataProvider from "../Form/FormContext";

import Header from "../Header";
import Footer from "../Footer";

const BookingPage = () => {
  return (
    <>
      <FormDataProvider>
        <Header />
        <Form />
        <Footer />
      </FormDataProvider>
    </>
  );
};

export default BookingPage;
