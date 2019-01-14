const mongoose = require('mongoose');

const DumpsterSchema = new mongoose.Schema({
    id : {
        type: Number
    },
    lat : {
        type: Number
    },
    lng : {
        type: Number,
    },
    unverified: {
        type: String
    },
    description: {
        type: String
    },
    author: {
        type: String
    },
    address: {
        type: String
    },
    created_at: {
        type: String
    },
    updated_at: {
        type: String
    }
});

module.exports = mongoose.model('Dumpster', DumpsterSchema);
