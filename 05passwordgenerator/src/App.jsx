import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const CopyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div class="min-h-screen bg-gray-900 flex items-center justify-center">
      <div class="w-full max-w-md shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
        <h1 class="text-white my-3 text-center">Password Generator</h1>

        <div class="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            class="outline-none w-full py-1 px-3 text-orange-500 bg-white"
            type="text"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            class="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={CopyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>
        <div class="flex text-sm gap-x-2">
          <div class="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              class="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length :{length}</label>
          </div>

          <div class="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>

          <div class="flex items-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
