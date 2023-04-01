import admiration from "../assets/admiration.png"

const Modal = ({open}) => {
  if(!open) return null

  return ( 
    <div className="modal fade modal-dialog modal-dialog-centered" id="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <img src={admiration} alt="terms"></img>
            <h3>Términos y Condiciones</h3>
            <p className="fs-4">Para llevar a cabo las finalidades descritas en el presente Aviso
              de Privacidad, utilizaremos datos personales de identificación,
              contacto y laborales.<br />
              Los datos personales que AtomicLabs recaba de usted, serán utilizados para las siguientes
              finalidades que son necesarias para ofrecer nuestros servicios:
            </p>
            <ul>
              <li>AtomicLabs requiere utilizar sus datos personales para incluirlo
                en la base de datos que utilizamos para prestar los servicios de reclutamiento, 
                selección de personal, administración de nómina y prestación de servicios. AtomicLabs
                utilizará sus datos personales para evaluar si es posible colocarlo en las vacantes de empleo 
                de la compañía o de los clientes de AtomicLabs y para conocer sus aptitudes,
                antecedentes y referencias laborales. En este sentido, AtomicLabs utilizará 
                sus datos personales para ponerse en contacto con usted en relacióna a las vacantes para las 
                cuales podría ser candidato.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
