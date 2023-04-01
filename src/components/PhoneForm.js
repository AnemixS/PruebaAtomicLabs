import Button from "./Button";
import { useForm } from "react-hook-form";

const PhoneForm = ({ handler }) => {
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
        <label for="phone" className="form-label">
          Número de celular
        </label>
        <input
          type="text"
          className="form-control"
          {...register("phone", { required: true, minLength: 10, maxLength: 10 })}
        />
        {errors.phone?.type === "required" && (
          <div className="form-text text-danger">El campo es requerido</div>
        )}
        {errors.phone?.type === "minLength" && (
          <div className="form-text text-danger">
            El campo deberá tener mínimo 10 carcateres.
          </div>
        )}
        {errors.phone?.type === "maxLength" && (
          <div className="form-text text-danger">
            El campo deberá tener máximo 10 carcateres.
          </div>
        )}
      </div>
      <Button
        type="primary"
        action="submit"
        className="ms-auto d-block"
        disabled={!isValid}
      >
        Continuar
      </Button>
    </form>
  );
};

export default PhoneForm;
