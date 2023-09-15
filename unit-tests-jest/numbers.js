/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    return [];
  }
  if (typeof numbers === 'function') {
    return [];
  }
  return numbers.filter((n) => n % 2 === 0);
}

/**
 * Returns a number formatted in dollars and cents.
 * It works for both integer and fractional numbers.
 * That is, `toDollars(12)` returns `$12.00` and
 * `toDollars(11.341)` returns `$11.34`.
 */
export function toDollars(amount) {
  const amountString = amount.toString();
  if (amountString.includes('.')) {
    const [dollars, cents] = amountString.split('.');
    const roundedCents = Math.round(Number(`0.${cents}`) * 100) / 100;
    const formattedCents = roundedCents.toFixed(2).split('.')[1];
    return `$${dollars}.${formattedCents}`;
  } else {
    return `$${amountString}.00`;
  }
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 * @param {Array} numbers The array of numbers to be divided by the divisor.
 * @param {number} divisor The number to divide into each element of `numbers`.
 * @returns a new array.
 */
export function divideBy(numbers, divisor) {
  const quotients = [];
  for (let i = 0; i < numbers.length; i++) {
    quotients.push(numbers[i] / divisor);
  }
  return quotients;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 * @param {Object} obj The object to modify.
 * @param {number} multiplier The number to multiply by.
 * @returns the input object.
 */
export function multiplyBy(obj, multiplier) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= multiplier;
    }
  }
  return obj;
}
