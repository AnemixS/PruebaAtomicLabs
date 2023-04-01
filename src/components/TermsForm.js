import Button from "./Button";
import { useForm } from "react-hook-form";
import admiration from "../assets/admiration.png"

const TermsForm = ({ handler }) => {
  const {
    formState: { isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onSubmit = () => {
    handler();
  };

  return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group">
					<p className="fs-4">Por favor revisa nuestros términos y condiciones para este servicio:</p>
					<span 
						className="cursor-pointer text-white font-weight-bold text-decoration-underline"
					>
						Consulta Términos y Condiciones
					</span>
					<div className="form-check mt-4">
						<input className="form-check-input mycheck" type="checkbox" /> 
						<label className="form-check-label" for="mycheck">
							Acepto los Terminos y Condiciones
						</label>
					</div>
				</div>
				<Button
					type="primary"
					action="submit"
					className="ms-auto d-block"
					disabled={!isValid}
				>
					Enviar
				</Button>
			</form>
			<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
		</>
  );
};

export default TermsForm;
