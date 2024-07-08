import { useState } from "react";

export default function CalculatorBMI() {
  const [age, setAge] = useState<number>();
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number | undefined>();
  const [msg, setMsg] = useState<string | undefined>();


  const reload = () => {
    window.location.reload();
  };

  const handleCalculations = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Hello please enter a valid number");
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">M</li>
        <li className= "list-group-item  ">L</li>
        <li className= "list-group-item ">XL</li>
      </ul>
    } else {
      let bmiFormula = ( weight / ( height * height ) * 10000) ;
      setBmi(Number(bmiFormula.toFixed(2)));
    }
    if (bmi !== undefined) {
      if (bmi < 25) {
        setMsg("You are Underweight");
      } else if (bmi >= 25 && bmi <= 35) {
        setMsg("You are healthy");
      } else if (bmi >= 36) {
        setMsg("You are Unhealthy, please seek medical attention");
      } else {
        setMsg(undefined);
      }
    }
  };

  return (
    <>
      <h1> BMI Calculator</h1>
      <form onSubmit={handleCalculations}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="formGroupExampleinput"
            placeholder="Age..."
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleinput2" className="form-label">
            Weight
          </label>
          <input
            type="number"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Weight..."
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleinput2" className="form-label">
            Height
          </label>
          <input
            type="number"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Height..."
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Calculate
          </button>
          <button type="button" className="btn btn-primary" onClick={reload}>
            Reload
          </button>
        </div>
        <div className="result">
          <h3>Age: {age}</h3>
          <h3>Your BMI is: {bmi}</h3>
          <p className="p-msg">{msg}</p>
        </div>
      </form>

      <ul className="list-group list-group-horizontal">
        <h3>Size:</h3>
        <li className={bmi !== undefined && bmi < 25 ? "list-group-item active" : "list-group-item"}>M</li>
        <li className={bmi !== undefined && bmi >= 25 && bmi < 35 ? "list-group-item active" : "list-group-item"}>L</li>
        <li className={bmi !== undefined && bmi >= 35 ? "list-group-item active" : "list-group-item"}>XL</li>
      </ul>
    </>
  );
}
