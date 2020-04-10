import React, {useState} from 'react'
import ControllerPanel from './ControllerPanel';
import InputArea from './InputArea';
import Navigation from './Navigation'
export default function Calculator() {
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
      let saveCalculation = async ({equation, result}) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ equation: equation, result: result })
        };
        fetch('http://localhost:3001/calculations', requestOptions);
      }
      function onButtonClick(title) {
          let button = {
            title: title,
            type: 'function'
          };
          if ('0' <= title && title <= '9')
            button.type = 'number';

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
                const result = Number.isInteger(evalResult)? String(evalResult) : String(evalResult.toFixed(9));
                setNumberStream({ ...numberStream, value: result});
                setCalculationStream({ ...calculationStream, value: v + '='});
                saveCalculation({
                    equation: v + '=',
                    result: result
                });
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
            <Navigation />
            <InputArea numberStream={numberStream} calculationStream={calculationStream} />
            <ControllerPanel onButtonClick={onButtonClick}/>
        </div>
      );
}