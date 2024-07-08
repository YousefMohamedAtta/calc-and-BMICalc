import './App.css'
import Calc from './components/calculator'
import BMI from './components/calculatorBmi'
//import Emoji from './components/emojiSearch'

import { useState } from "react"
import { ImCalculator } from "react-icons/im";

const App = () => {
    const [calcVisibile , setCalcVisibility] = useState(false)
    const cALc = ['%','/','9','8','7','*','6','5','4','+','3','2','1','-','00','0','.']
    const opetration = ['%','/','*','+',"-"]

    const handleSelectItem = (item:string)=> {
        console.log(item);
    } 

    const visibile = () => {
        if(calcVisibile == false) {
        setCalcVisibility(true);
        }else setCalcVisibility(false);
        }

    return (
        <>
        <button className="buttonCalc" onClick={visibile}><ImCalculator className="cAlC" /></button>
        {calcVisibile&& <Calc />}
        <BMI/>
        </>
    )
}

export default App



















