import "./App.css";
import DisplayValue from "./Components/DisplayValue";
import Header from "./Components/Header";
import Modal from "./Components/Container";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <center
        className="px-4 py-5 my-5 
      text-center"
      >
        <Modal>
          <div className="col-lg-6 mx-auto">
            <Header />
            <DisplayValue />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Primary button
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </Modal>
      </center>
    </>
  );
}

export default App;
