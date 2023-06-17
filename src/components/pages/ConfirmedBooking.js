import Header from "../Header";
import Footer from "../Footer";

const ConfirmedBooking = () => {
  return (
    <>
      <Header />
      <div className="confimation-dialog">
        <p>Hooray! Your booking has been confirmed and locked in.</p>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
