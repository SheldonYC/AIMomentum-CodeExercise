// this function is used to iterate over a object and increment the value of each key by 10.0002
// then the value is rounded to 6 decimal places to mitigate the effect of precision on readability 
function incrementObjectValues(object, value) {
  const newObject = {};
  Object.keys(object).map((key) => {
    newObject[key] = (object[key] + value).toFixed(6);
  });
  return newObject;
}

// this function is used to check if a string (integer or decimal) is even number
// the checking is done by inspecting the last digit of the number if it is even number
function isEven(string) {
  const lastDigit = parseInt(string[string.length - 1]);
  return lastDigit % 2 === 0;
}
export { incrementObjectValues, isEven };