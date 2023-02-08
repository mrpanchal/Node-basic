const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log('------NEW CHUNK-------');
//     // console.log(chunk.toString());
//     //we dont have to do toString if we pass the 2nd argument "encoding"
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);