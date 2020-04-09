import React, {useState} from 'react';
import './App.css';
import ControllerPanel from './Calc/ControllerPanel';
import InputArea from './Calc/InputArea';

function App() {
  let [numberStream, setNumberStream] = useState({
    value: '0'
  })
  let [calculationStream, setCalculationStream] = useState({
    value: ''
  })
  function CEbtn(){
    setNumberStream({ ...numberStream, value: '0'});
  }
  function Cbtn(){
    setCalculationStream({ ...numberStream, value: ''});
    setNumberStream({ ...numberStream, value: '0'});
  }
  function Numberbtn(button){
    let v = numberStream.value;
        let v1 = calculationStream.value;
        if ((v1.length > 0) && (v1[v1.length-1] === '=')){
          Cbtn();
          v = '0';
        }
        if (v === '0')
          v = button.title;
        else
          v = numberStream.value + button.title;
        setNumberStream({ ...numberStream, value: v})
  }
  function onButtonClick(button) {
      if(button.type === 'number') {
        Numberbtn(button);
      }
      if (button.type === 'function') {
        if (button.title === 'CE'){
          let v1 = calculationStream.value;
          if ((v1.length > 0) && (v1[v1.length-1] === '=')){
            Cbtn();
          } else {
            CEbtn();
          }
        }
        else if (button.title === 'C'){
          Cbtn();
        }
        else if (button.title === 'del'){
          // Delete button  
          let res = numberStream.value;
          if (res.length === 1 || (res.length === 2 && res[0] === '-'))
            res = '0';
          else
            res =  res.substring(0, res.length - 1);
          setNumberStream({ ...numberStream, value: res});
        }
        else if(button.title === '+/-'){
          let v = numberStream.value;
          if (v !== '0'){
            v = String(parseInt(v)*(-1));
            setNumberStream({...numberStream, value: v});
          }
        }
        else if (button.title === '='){
          try {
            let v = addNumber();
            const evalResult = eval(v);
            const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(9);
            setNumberStream({ ...numberStream, value: result});
            setCalculationStream({ ...calculationStream, value: v + '='});
          } catch (error) {
            alert('Invalid Mathematical Equation');
          }
        }else if (button.title === '*' || button.title === '+' || button.title === '/' || button.title === '-' ){
          let v1 = calculationStream.value;
          if ((v1.length > 0) && (v1[v1.length-1] === '=')){
            v1 = '';
          }
          let v = v1 + numberStream.value + button.title;
          setNumberStream({ ...numberStream, value: '0'});
          setCalculationStream({ ...calculationStream, value: v});
        } else if(button.title === 'x^2') {
          let v = numberStream.value;
          let v1 = calculationStream.value;
          if ((v1.length > 0) && (v1[v1.length-1] === '=')){
            setCalculationStream({...calculationStream, value: ''});
          }
          setNumberStream({ ...numberStream, value: String(v * v) });
        } else if(button.title === '1/x') {
          let v = numberStream.value;
          let v1 = calculationStream.value;
          if ((v1.length > 0) && (v1[v1.length-1] === '=')){
            setCalculationStream({...calculationStream, value: ''});
          }
          setNumberStream({ ...numberStream, value: String(1/v) });
        } else if(button.title === 'sqrt(x)') {
          let v = numberStream.value;
          let v1 = calculationStream.value;
          if ((v1.length > 0) && (v1[v1.length-1] === '=')){
            setCalculationStream({...calculationStream, value: ''});
          }
          setNumberStream({ ...numberStream, value: String(Math.sqrt(v)) });
        }
      }
  }
  function addNumber(){
    let v = calculationStream.value + numberStream.value;
    setNumberStream({ ...numberStream, value: '0'});
    setCalculationStream({ ...calculationStream, value: v});
    return v;
  }
  return (
    <div className="wrapper">
        <InputArea numberStream={numberStream} calculationStream={calculationStream} />
        <ControllerPanel onButtonClick={onButtonClick}/>
    </div>
  );
}

export default App;
