import "./App.css";
import DisplayValue from "./Components/DisplayValue";
import Header from "./Components/Header";
import Modal from "./Components/Container";
import "bootstrap/dist/css/bootstrap.css";
import Controls from "./Components/Controls";

function App() {
  return (
    <center
      className="px-4 py-5 my-5 
      text-center"
    >
      <Modal>
        <div className="col-lg-6 mx-auto">
          <Header />
          <DisplayValue />
          <Controls />
        </div>
      </Modal>
    </center>
  );
}

export default App;
