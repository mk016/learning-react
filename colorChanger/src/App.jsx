import React, { useState } from 'react';
import Navbar from './comonents/Navbar'


function App() {
  const [color, setColor] = useState("White");

  return (
    <>
    <div>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className="text-center text-5xl">Hello This My First Project</h1>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >Green</button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >Blue</button>
            <button
              onClick={() => setColor("Orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Orange" }}
            >Orange</button>
            <button
              onClick={() => setColor("White")}
              className="outline-none px-4 py-1 rounded-full text-Black shadow-lg"
              style={{ backgroundColor: "white" }}
            >White</button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >Black</button>
            <button
              onClick={() => setColor("Gray")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Gray" }}
            >Gray</button>
            <button
              onClick={() => setColor("Pink")}
              className="outline-none px-4 py-1 rounded-full text-BLACK shadow-lg"
              style={{ backgroundColor: "Pink" }}
            >Pink</button>
            <button
              onClick={() => setColor("Lavender")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "Lavender" }}
            >Lavender</button>
            <button
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full text-BLack shadow-lg"
              style={{ backgroundColor: "Yellow" }}
            >Yellow</button>
              <button
              onClick={() => setColor("Olive")}
              className="outline-none px-4 py-1 rounded-full text-BLack shadow-lg"
              style={{ backgroundColor: "Olive" }}
            >Olive</button>
              <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-BLack shadow-lg"
              style={{ backgroundColor: "brown" }}
            > Brown</button>
                <button
              onClick={() => setColor("skyblue")}
              className="outline-none px-4 py-1 rounded-full text-BLack shadow-lg"
              style={{ backgroundColor: "skyblue" }}
            > Skyblue</button>
               <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-BLack shadow-lg"
              style={{ backgroundColor: "Purple" }}
            > Purple</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
