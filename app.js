const express = require('express');
//logger middleware
const morgan = require('morgan');
//mongoose
const mongoose = require('mongoose');
//const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

// // Connect to Mongodb
const dbURI = 'mongodb+srv://mihirp:test1234@nodetuts.1mrxuxf.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

//Register view Engine.
app.set('view engine', 'ejs')

//Listen for requests
//app.listen(3000) -- now we are loistening through database ^^

// middleware nd static files
//app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev')) // logger middleware.


// MIDDLEWARES ////
// app.use((req, res, next) => {
//     console.log('Pathname: ', req.path);
//     console.log('host: ', req.hostname);
//     console.log('method: ', req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log('In the next middlewware...');
//     next();
// })

//mongoose and mongodb sandbox routes
//adding blog
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// // Find all blogs
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// // Find Single blog.
// app.get('/single-blog', (req, res) => {
//     Blog.findById('634e7c42ad624ade2a5d9176')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

//// ROUTES     ////////
app.get('/', (req, res) => {
    // res.send('<p>Hello exoress</p>')
    // res.sendFile('./views/index.html', { root: __dirname }); (This is static, ejs is dynamic)
    // const blogs = [
    //     { title: 'The cave alagory', snippet: 'la la la la la la la la la' },
    //     { title: 'The theory of Ideas', snippet: 'la la la la la la la la la' },
    //     { title: 'Two World Theory', snippet: 'la la la la la la la la la' }
    // ]
    // res.render('index', { title: 'Home', blogs: blogs })
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
});

// BLOG routes
app.use('/blogs', blogRoutes);

// 404 Error
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})
