import { PiClockCountdownBold } from "react-icons/pi";
import "../App.css";
const Header = () => {
  return (
    <>
      <PiClockCountdownBold className="clock" />

      <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
    </>
  );
};

export default Header;
