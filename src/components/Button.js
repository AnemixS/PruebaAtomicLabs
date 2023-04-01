import classNames from "classnames";

const Button = ({ children, type, handler, className, action, disabled }) => {
  const btnClass = classNames(
    {
      "btn-light text-main-blue btn-hover": !type || type === "default",
      "bg-main-red text-white": type === "primary",
      "border-0": disabled,
    },
    `btn fs-4 fw-bold rounded-pill px-5 ${className}`
  );
  return (
    <button
      className={btnClass}
      onClick={handler}
      type={action || "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
