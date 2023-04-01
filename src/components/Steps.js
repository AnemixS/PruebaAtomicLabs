const Steps = (props) => {
  const { image, children } = props;
  return (
    <div className="row">
      <div className="col-12 d-flex flex-row align-items-center">
        <img src={image} alt="" />
        {children}
      </div>
    </div>
  );
};

export default Steps;
