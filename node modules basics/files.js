const fs = require('fs')

/////////////         reading files
// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

////////////          writing files
// fs.writeFile('./docs/blog.txt', 'Ohk now you have got what you wanted',
//     () => {
//         console.log('File is written.');
//     }
// )
// fs.writeFile('./docs/blog2.txt', 'Once again you have arrived,',
//     () => {
//         console.log('File is written.');
//     }
// )

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File is created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder deleted.');
    })
}


//deleting files
if (fs.existsSync('./docs/deletme.txt')) {
    fs.unlink('./docs/deletme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
