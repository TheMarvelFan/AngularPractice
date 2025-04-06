import {Calculator} from './test.service'

describe('testService', () => {
  it('should add 2 numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(3, 2)).toBe(5);
  });

  it('should subtract 2 numbers', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(3, 2)).toBe(1);
  });

  it('should multiply 2 numbers', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(3, 2)).toBe(6);
  });
});
