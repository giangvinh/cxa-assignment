import { calculate } from './helpers';

describe('Helper function', () => {
  it('calculate should update the operation', () => {
    const startState = { total: '2', next: '2', operation: null };
    const operateName = '+';
    expect(calculate(startState, operateName)).toStrictEqual({
      total: '2',
      next: null,
      operation: '+',
    });
  });

  it('calculate should update the next with number inputting', () => {
    const startState = { total: '2', next: null, operation: '+' };
    const operateName = '2';
    expect(calculate(startState, operateName)).toStrictEqual({
      total: '2',
      next: '2',
      operation: '+',
    });
  });

  it('calculate should update the total with plus when click =', () => {
    const startState = { total: '2', next: '2', operation: '+' };
    const operateName = '=';
    expect(calculate(startState, operateName)).toStrictEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });

  it('calculate should update the total with multiply when click =', () => {
    const startState = { total: '2', next: '2', operation: 'x' };
    const operateName = '=';
    expect(calculate(startState, operateName)).toStrictEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });

  it('calculate should update the total with divide when click =', () => {
    const startState = { total: '2', next: '2', operation: '÷' };
    const operateName = '=';
    expect(calculate(startState, operateName)).toStrictEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });

  it('calculate should update the total with minus when click =', () => {
    const startState = { total: '2', next: '2', operation: '-' };
    const operateName = '=';
    expect(calculate(startState, operateName)).toStrictEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });
});
