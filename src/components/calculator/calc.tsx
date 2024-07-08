import { useState } from "react"
import './calc.css'
import { HiBackspace } from "react-icons/hi2";

const Calc = () => {
const [input , setInput] = useState<string>("");

const buttons = [ "%","/","9","8","7","*","6","5","4","+","3","2","1","-","00","0",".","="];

const handleButtonClick = (value: string | JSX.Element) => {
  if (value === "=") {
    handleCalc();
  } else if (value === "AC") {
    handleClear();
  } else if (value === <HiBackspace className="iconClear" />) {
    handleClearOne();
  } else {
    setInput((prevInput) => prevInput + value);
  }
};

const handleClear = () => {
    setInput("")
}

const handleClearOne = () => {
    setInput(prevInput => prevInput.slice(0, -1));
}
const handleCalc = () => {
    try{
        setInput(eval(input).toString())
    }catch (err){
        setInput("Error")
    }
}

return (
    <>
    <div className="container ">
        <div className="calc">
            <div className="display">
                {input}
            </div>
            <div className="buttons">
                <button onClick={handleClear}>AC</button>
                <button onClick={handleClearOne}>{<HiBackspace className="iconClear"/>} </button>
                {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(button.toString())}
                className={
                  typeof button === "number" ? "number" : "operator"
                }
              >
                {button}
              </button>
            ))}
                
            </div>

        </div>
    </div>
</>
) 
}
export default Calc



/*


import { JSXElementConstructor, useState } from "react";
const Calc = () => {
  const [input, setInput] = useState<string>("");

  
  const handleButtonClick = (value: string | JSX.Element) => {
    if (value === "=") {
      handleCalc();
    } else if (value === "AC") {
      handleClear();
    } else if (value === <HiBackspace className="iconClear" />) {
      handleClearOne();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleClearOne = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalc = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Error");
    }
  };

  return (
    <>
      <div className="container">
        <div className="calc">
          <div className="display">{input}</div>
          <div className="buttons">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(button.toString())}
                className={
                  typeof button === "number" ? "number" : "operator"
                }
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;*/




































/*;

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
  onClick: () => void;
}

const Calc = ({ items, onSelectItem, onClick }: Props) => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleClearOne = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleCalc = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Error");
    }
  };

  return (
    <>
      <div className="container">
        <div className="calc">
          <div className="display">{input}</div>
          <div className="buttons">
            {items.map((item) => (
              <button key={item} onClick={() => handleButtonClick(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;*/