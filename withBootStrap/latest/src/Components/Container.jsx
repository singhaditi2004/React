import CurrentTime from "./CurrentTime";
import Heading from "./Heading";
import Moto from "./Moto";
import "../App.css";
function Container() {
  return (
    <div className="center-container">
      <div className="card shadow center-container" style={{ width: "18rem" }}>
        <div className="card-body">
          <Heading />
          <p className="card-text">
            <Moto />
          </p>
          <CurrentTime />
        </div>
      </div>
    </div>
  );
}

export default Container;
