import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
it('calculator is working', () => {
  shallow(<App />);
});
describe('<App />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<App />);
    expect('12').to.have.lengthOf(3);
  });
});