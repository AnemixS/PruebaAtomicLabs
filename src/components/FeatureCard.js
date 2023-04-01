const FeatureCard = (props) => {
  const { image, title, content, active, clickHandler, cardIndex } = props;
  return (
    <div
      className="col"
      onMouseEnter={() => {
        clickHandler(cardIndex);
      }}
    >
      <div
        className={`feature-card card h-100 border-0 text-space-blue ${
          active ? "active" : ""
        }`}
      >
        <div className="card-body d-flex flex-column align-items-center fs-4 px-5 py-3">
          <img src={image} alt="" />
          <h3 className="fw-bold fs-2 text-uppercase">{title}</h3>
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
