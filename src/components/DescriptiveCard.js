import { FaRegCheckCircle } from "react-icons/fa";

const DescriptiveCard = (props) => {
  const { image, content } = props;
  return (
    <div className="col">
      <div className="feature-card card h-100 bg-transparent shadow-none border-0 bullet">
        <div className="card-body d-flex flex-column justify-content-end align-items-center">
          <img src={image} alt="" className="w-50" />
          <ul className="mt-4">
            {content.map((item) => {
              return (
                <li className="d-flex flex-row align-items-baseline">
                  <FaRegCheckCircle size={18} className="text-main-red" />
                  <span className="fs-5 ms-3">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptiveCard;
