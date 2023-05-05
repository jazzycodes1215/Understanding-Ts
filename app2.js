function add(n1, n2) {
    return n1 + n2;
}
var number3 = '5';
var number4 = 2.8;
var result2 = add(number3, number4);
console.log('Wrong Result:', result2);
// This is how types work in TS Code, it will return error: 
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//TS helps in development to catch errors, but not in runtime.
