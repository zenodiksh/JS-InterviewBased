//you dont know objects yet....
//kya pi ki value 3.14 se 4 /5 ho saki h kbhi bhi
//eek trike se yes

console.log(Math.PI);

Math.PI=5;
console.log(Math.PI);
//with the above code PI "s value is not changing how do i change 
const descriptor= Object.getOwnPropertyDescriptor(Math,'PI');
console.log(descriptor)
//output below---------------->
// 3.141592653589793
// 3.141592653589793
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
//writable jo h 