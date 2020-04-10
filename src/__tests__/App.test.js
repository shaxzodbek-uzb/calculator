import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Calculator from '../Calc/Calculator';
import InputArea from '../Calc/InputArea';
import ControllerPanel from '../Calc/ControllerPanel';
import Button from '../Calc/Button';

describe('App', () => {
  it('calculator is working', () => {
    const wrapper = shallow(<App />);
  });
  it('Input value is 0', () => {
    const wrapper = mount(<Calculator />);
    const inputState = wrapper.find(InputArea).prop('numberStream').value;
    expect(inputState).toEqual('0');
  });
  it('Equation is empty', () => {
    const wrapper = mount(<Calculator />);
    const equationState = wrapper.find(InputArea).prop('calculationStream').value;
    expect(equationState).toEqual('');
  });
});