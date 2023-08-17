const mongoose = require ('mongoose');

const VisitorSchema = new mongoose.Schema( {
    
    name: {
        type: String,
    },

    email: {
        type: String,
    },

    message: {
        type: String,
    },

})

const Visitor = mongoose.model('Portfolio_Data', VisitorSchema);

module.exports = Visitor;