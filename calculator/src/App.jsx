import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newInputVal = calVal + buttonName;
      setCalVal(newInputVal);
    }
  };

  return (
    <div className="calculator">
      <Display displayValue={calVal} />
      <ButtonsContainer handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
