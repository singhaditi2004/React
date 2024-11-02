const Modal = ({ children }) => {
  return (
    <>
      <div className="card" style={{ width: "75%" }}>
        <div className="card-body">{children}</div>
      </div>
    </>
  );
};
export default Modal;
