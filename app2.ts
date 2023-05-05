function add2(n1: number, n2: number) {
 return n1 + n2   
}

let number3 = '5'
let number4 = 2.8

let result2 = add(number3, number4)
console.log('Wrong Result:', result2);

// This is how types work in TS Code, it will return error: 
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//TS helps in development to catch errors, but not in runtime.