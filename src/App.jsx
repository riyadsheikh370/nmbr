import { useState } from "react"


function App() {

  let [ami, setAmi] = useState(0)

  let handleIncrement = () => {
    if (ami < 10) {
      setAmi(ami + 1);
    }
  };
  let handleDecrement = () => {
    if (ami > 0) {
      setAmi(ami - 1);
    }
  };


  return (
    <>
        <button onClick={handleDecrement}>-</button>
        <h1>{ami}</h1>
        <button onClick={handleIncrement}>+</button>
    </>
  );
}

export default App
