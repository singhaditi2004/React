import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [specailAllow, setSpecialAllow] = useState(false);
  const [pass, setPass] = useState("");
  const passGen = useCallback(() => {
    let password = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz";
    if (numAllow) {
      str += "0123456789";
    }
    if (specailAllow) {
      str += "!@#$%^&*_=+-/|;'()";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password = str.charAt(char);
    }
    setPass(password);
  }, [length, numAllow, specailAllow, setPass]);
  return (
    <>
      <h1 className="text-3xl text-center text-white">Password Generator</h1>
      <div className="flex w-96  h-40 shadow rounded-md text-white bg-gray-600 overflow-hidden mx-12 my-12 content-center mb-4 ">
        <input
          type="text"
          value={pass}
          className="outline-none w-20 py-1 h-10 px-3"
          placeholder="Password"
          readOnly
        />
      </div>
    </>
  );
}

export default App;
