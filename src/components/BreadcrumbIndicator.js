import { BiCheck } from "react-icons/bi";
import classNames from "classnames";
const BreadcrumbIndicator = (props) => {
  const { step, isCompleted, current } = props;
  const indicatorsClasses = classNames("indicator", {
    current: current || isCompleted,
  });

  return (
    <div className={indicatorsClasses}>
      {isCompleted ? <BiCheck className="fs-4" /> : step}
    </div>
  );
};

export default BreadcrumbIndicator;
