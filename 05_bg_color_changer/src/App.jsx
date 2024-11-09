import { useState } from 'react';
import './App.css';

function App() {
  const [color, setBackgroundColor] = useState("orange");
  const [textColor, setTextColor] = useState("");



  const changeColor = (newColor) => {
    setBackgroundColor(newColor);
    if (newColor === 'black') {
      setTextColor('white')
    }
    else if (newColor === "green") {
      setTextColor("green")
    }
  }

  return (
    <>
    <div className='w-full h-screen duration-200' style={{background : color }}>
      <button onClick={() => changeColor("red")}> <span style={{background : textColor }}>Red</span> </button>
      <button onClick={() => changeColor("green")}><span style={{background : textColor }}>Green</span></button>
      <button onClick={() => changeColor("blue")}><span style={{background : textColor }}>Blue</span></button>
      <button onClick={() => changeColor("black")}><span style={{background : textColor }}>Black</span></button>
      </div>
    </>
  );
}

export default App;
