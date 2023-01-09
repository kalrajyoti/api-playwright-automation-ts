//Literal types are types where you don't just say that a certain variable or a parameter should hold, let's say a number or a string,

//but where you are very clear about the exact value it should hold.

function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
  ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
  }
  
  const combinedAge = combine(30, 26, 'as-number');
  console.log(combinedAge);
  
  const combinedStringAge = combine('30', '26', 'as-number');
  console.log(combinedStringAge);
  
  const combinedName = combine('Max', 'Anna', 'as-text');
  console.log(combinedName);
  