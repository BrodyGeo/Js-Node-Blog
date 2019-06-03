const Blog = require('../models/blog.js');

/* Give form for new post */
exports.new = (req, res) => 
{
    res.render('blogs/new', {
        title: 'New Blog Post!'
    });
};

/* Show blogs */
exports.index = (req, res) => 
{
    Blog.find()
    .then(blogs => {
        res.render('blogs/index', {
            blogs: blogs,
            title: 'Archive'
        });
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
    });
};

/* Show one post */
exports.show = (req, res) => 
{

};

/* Create (Submit) a new blog post */
exports.create = (req, res) => 
{
    Blog.create(req.body.blog)
    .then(() => {
        res.redirect('/blogs');
    })
    .catch(error => {
        console.log(`ERROR: ${error}`);
    });
};

/* Get all draft blog posts */
exports.drafts = (req, res) => 
{

};

/* Get all published blog posts */
exports.published = (req, res) => 
{

};