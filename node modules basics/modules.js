// const xyy = require('./people')
// console.log(xyy.people, xyy.age);

//its destructuring.
const { philo, age } = require('./poeple')

console.log(philo, age);

const os = require('os');
console.log(os);
console.log(os.platform(), os.homedir());