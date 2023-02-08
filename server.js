const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    // LOADASH //
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello...');
    })

    greet()
    greet()

    // (1) set header content type
    res.setHeader('Content-Type', 'text/html')
    // res.write('<head><link rel="stylesset" href="#"></head>')
    // res.write('<p>Hello, start some else</p>')
    // res.write('<p>Hello, start some else again</p>')
    // res.end();

    // (3) add Routing for differner files
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200; ``
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301; // status code is for permanently redirected/moved
            res.setHeader('location', './about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 400;
            break;
    }

    // (2) read files module
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            //res.write(data)
            res.end(data) //if there is only one file data thrn wee can write in end
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request');
})
