import { ImLinkedin2, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="container-fluid bg-black text-white">
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center py-5">
                <p className="mb-0">
                  2020 AtomicLabs. Todos los derechos reservados.
                </p>
                <div className="d-flex align-items-center">
                  <a href="/#" className="text-white mx-5">
                    Aviso de privacidad
                  </a>
                  <ImLinkedin2 size={30} />
                  <ImTwitter className="mx-4" size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
