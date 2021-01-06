import Big from "big.js";


const isNumber = (item) => {
  return /[0-9]+/.test(item);
}

const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}

export const calculate = (obj, buttonName) => {

  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return {...obj, next: obj.next + buttonName };
      }
      return {...obj, next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      const next = obj.next + buttonName;
      return {
        ...obj,
        next
      };
    }
    return {
      ...obj,
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}

export const getNameByKeyboardInputting = (keyCode) => {
  let name = null;
  switch (keyCode) {
    case 97:
    case 49:
      name = "1";
      break;
    case 98:
    case 50:
      name = "2";
      break;
    case 99:
    case 51:
      name = "3";
      break;
    case 100:
    case 52:
      name = "4";
      break;
    case 101:
    case 53:
      name = "5";
      break;
    case 102:
    case 54:
      name = "6";
      break;
    case 103:
    case 55:
      name = "7";
      break;
    case 104:
    case 56:
      name = "8";
      break;
    case 105:
    case 57:
      name = "9";
      break;
    case 27:
    case 46:
    case 8:
      name = "AC";
      break;
    case 106:
      name = "x";
      break;
    case 107:
      name = "+";
      break;
    case 109:
      name = "-";
      break;
    case 111:
      name = "÷";
      break;
    case 13:
    case 187:
      name = "=";
      break;
    case 48:
    case 96:
      name = "0";
      break;
    default:
      break;
  }
  return name;
}
