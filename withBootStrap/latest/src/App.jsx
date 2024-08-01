import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import CurrentTime from "./Components/CurrentTime";
import Moto from "./Components/Moto";
import Heading from "./Components/Heading";

function App() {
  return (
    <>
      <center>
        <Container></Container>
        <CurrentTime></CurrentTime>
        <Moto></Moto>
        <Heading></Heading>
      </center>
    </>
  );
}

export default App;
