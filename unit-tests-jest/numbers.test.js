import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers Test', () => {
  it('should return only even numbers', () => {
    const input = [2, 3, 4, 5];
    const result = evenNumbers(input);
    expect(result).toEqual([2, 4]);
  });
  it('should return an empty array when an empty array is the input', () => {
    const input = [];
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
  it('should return an empty array when an object is passed', () => {
    const input = {};
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
  it('should return an empty array when a function is passed', () => {
    const input = (a, b) => a + b;
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
});

describe('toDollars Test', () => {
  it('should return the original number plus .00 if there is no decimal points', () => {
    const input = 12;
    const result = toDollars(input);
    expect(result).toEqual('$12.00');
  });
  it('should return a number with only two digit spaces for the cents if there is already a decimal in the input', () => {
    const input = 11.341;
    const result = toDollars(input);
    expect(result).toEqual('$11.34');
  });
  it('should return an empty array when an empty array is the input', () => {
    const input = [];
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
  it('should return an empty array when an object is passed', () => {
    const input = {};
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
});

describe('DivideBy Test', () => {
  it('should return the quotient of two numbers', () => {
    const numbers = [2, 4, 6];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3]);
  });
  it('should return an empty array when an empty array is the input', () => {
    const input = [];
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
  it('should return an empty array when an object is passed', () => {
    const input = {};
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
  it('should be able to divide using numbers with decimals', () => {
    const numbers = [2.5, 53.5, 6.7];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0.5, 10.7, 1.34]);
  });
});

describe('Multiply Test', () => {
  it('should take an input object, multiply the values (only if they are numbers) by a common number', () => {
    const obj = {
      key1: 'string value',
      key2: 3,
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({
      key1: 'string value',
      key2: 6,
    });
  });
  it('should return an empty array when an empty array is the input', () => {
    const input = [];
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
  it('should return an empty array when an object is passed', () => {
    const input = {};
    const result = evenNumbers(input);
    expect(result).toEqual([]);
  });
});
