import Button from "./Button";
import { useForm } from "react-hook-form";
import edit from "../assets/edit.png"

const VerificationForm = ({ handler }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onSubmit = () => {
    handler();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group w-50">
        <p className="fs-4 mb-0">Te enviamos un SMS al número:</p>
        <p className="fs-4 d-flex align-items-center">+52 55 1850 9196
            <img src={edit} alt="edit" className="ms-3"></img>
        </p>
        <p>Ingresa el código de verificación:</p>
        <label for="verification" className="form-label">
          Código de verificación
        </label>
        <input
          type="text"
          className="form-control"
          {...register("verification", { required: true, minLength: 6, maxLength: 6 })}
        />
        {errors.verification?.type === "required" && (
          <div className="form-text text-danger">El campo es requerido</div>
        )}
        {errors.verification?.type === "minLength" && (
          <div className="form-text text-danger">
            El campo deberá tener mínimo 6 carcateres.
          </div>
        )}
        {errors.verification?.type === "maxLength" && (
          <div className="form-text text-danger">
            El campo deberá tener máximo 6 carcateres.
          </div>
        )}
      </div>
      <div className="form-group w-50 mt-5">
        <p>¿No recibiste el código?
            <a href="/" className="ms-2 text-white text-decoration-none"><b>Reenviar código</b></a>
        </p>
      </div>
      <Button
        type="primary"
        action="submit"
        className="ms-auto d-block"
        disabled={!isValid}
      >
        Validar código
      </Button>
    </form>
  );
};

export default VerificationForm;
