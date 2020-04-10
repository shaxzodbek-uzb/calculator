import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Calculator from '../Calc/Calculator';
import InputArea from '../Calc/InputArea';
import ControllerPanel from '../Calc/ControllerPanel';
import Button from '../Calc/Button';

describe('Calculations', () => {
    const cases = [
      {
        btns: ['1','+','1','='],
        fact: {
          equation: '1+1=',
          result: '2'
        }
      },
      {
        btns: ['9','*','8','='],
        fact: {
          equation: '9*8=',
          result: '72'
        }
      },
      {
        btns: ['1','/','3','='],
        fact: {
          equation: '1/3=',
          result: '0.333333333'
        }
      }
    ];
    for (const v of cases){
      it(v.fact.equation+v.fact.result, () => {
        const wrapper = mount(<Calculator />);
        for(const b of v.btns)
          wrapper.find(ControllerPanel).find('div[procc="' + b + '"]').simulate('click');
        const inputState = wrapper.find(InputArea).prop('numberStream').value;
        expect(inputState).toEqual(v.fact.result);
        const equationState = wrapper.find(InputArea).prop('calculationStream').value;
        expect(equationState).toEqual(v.fact.equation);
        
      })
    }
  
  })