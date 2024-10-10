import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charterAllowed, setCharterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (charterAllowed) {
      str = str + "~!`@#$%^&*()_-+={}[]";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char];
    }
    setPassword(pass);
  }, [length, numberAllowed, charterAllowed]);

  return (
    <>
      <h1 className="text-white bg-gray-800">Hello React!</h1>
      <div className="w-full max-w-md px-3 py-4 my-3 bg-gray-700 rounded-md text-orange-500  mx-auto flex ">
        <input
          type="text"
          className="w-full outline-none p-3 rounded-md"
          value={password}
          readOnly
        />
        <button className="px-3 py-2 bg-blue-500 text-white rounded-md ">
          Copy
        </button>
      </div>
      <div className="max-w-md mx-auto flex w-full">
        <div className="text-orange-500">
          <input
            type="range"
            max={100}
            min={6}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label> length{length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            className=""
            value={numberAllowed}
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label>Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            className=""
            value={charterAllowed}
            onChange={() => {
              setCharter((prev) => !prev);
            }}
          />
          <label>Charter</label>
        </div>
      </div>
    </>
  );
}

export default App;
