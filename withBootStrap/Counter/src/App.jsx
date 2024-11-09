import "./App.css";
import DisplayValue from "./Components/DisplayValue";
import Header from "./Components/Header";
import Modal from "./Components/Container";
import "bootstrap/dist/css/bootstrap.css";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./Components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center
      className="px-4 py-5 my-5 
      text-center"
    >
      <Modal>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <DisplayValue />}

          <Controls />
        </div>
      </Modal>
    </center>
  );
}

export default App;
