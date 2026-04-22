import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Add })).toBe(5);
    expect(simpleCalculator({ a: -1, b: 1, action: Action.Add })).toBe(0);
    expect(simpleCalculator({ a: -4, b: -6, action: Action.Add })).toBe(-10);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 4, action: Action.Subtract })).toBe(6);
    expect(simpleCalculator({ a: 3, b: 7, action: Action.Subtract })).toBe(-4);
    expect(simpleCalculator({ a: -5, b: -3, action: Action.Subtract })).toBe(-2);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 3, b: 4, action: Action.Multiply })).toBe(12);
    expect(simpleCalculator({ a: 99, b: 0, action: Action.Multiply })).toBe(0);
    expect(simpleCalculator({ a: -3, b: -4, action: Action.Multiply })).toBe(12);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 2, action: Action.Divide })).toBe(5);
    expect(simpleCalculator({ a: 7, b: 2, action: Action.Divide })).toBe(3.5);
    expect(simpleCalculator({ a: 9, b: -3, action: Action.Divide })).toBe(-3);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 10, action: Action.Exponentiate })).toBe(1024);
    expect(simpleCalculator({ a: 5, b: 0, action: Action.Exponentiate })).toBe(1);
    expect(simpleCalculator({ a: 2, b: -2, action: Action.Exponentiate })).toBe(0.25);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: 1, b: 2, action: 'invalid' })).toBeNull();
    expect(simpleCalculator({ a: 1, b: 2, action: '?' })).toBeNull();
    expect(simpleCalculator({ a: 1, b: 2, action: null })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: '5', b: 2, action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 5, b: null, action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: undefined, b: undefined, action: Action.Add })).toBeNull();
  });
});