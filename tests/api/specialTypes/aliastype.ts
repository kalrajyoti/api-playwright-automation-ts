//you have to define with  the type keyword and after type you add the name of your custom type
//Now the type keyword is not built into JavaScript,it's supported in TypeScript though,
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
)
