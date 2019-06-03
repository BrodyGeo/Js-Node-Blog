const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false
        },
        status: {
            type: String,
            enum: ['DRAFT', 'PUBLISHED'],
            default: 'DRAFT'
        }
    }, {
        timestamps: true
    }
);

/* Query helpers */
blogSchema.query.drafts = function () {
    return this.where({status: 'DRAFT'});
};

blogSchema.query.published = function () {
    return this.where({status: 'PUBLISHED'});
};


/* Export the model */
module.exports = mongoose.model('Blog', blogSchema);