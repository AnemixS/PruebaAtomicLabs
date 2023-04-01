import spaceman4 from "../assets/spaceman-4.png";
import Footer from "../components/Footer";
const Confirmation = () => {
  return (
    <>
      <div className="container">
        <div className="row vh-100">
          <div className="col-12 col-md-6 h-100 d-flex flex-column justify-content-center">
            <h2 className="mb-5 fs-lg fw-bold text-uppercase">
              tus datos
              <br />{" "}
              <span className="text-main-red">han sido enviados con éxito</span>
            </h2>
            <p className="fs-4">
              En breve recibirás un correo de confirmación por parte del equipo
              de AtomicLabs.
            </p>
            <p className="fs-4">
              Recuerda revisar tu banjeda de SPAM <br />
              ¡Esperamos verte pronto!
            </p>
          </div>
          <div className="col-12 col-md-6 h-100 d-flex flex-column justify-content-center align-items-center">
            <img src={spaceman4} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
