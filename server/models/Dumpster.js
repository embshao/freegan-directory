const mongoose = require('mongoose');

const DumpsterSchema = new mongoose.Schema({
    lat : {
        type: Number,
        default: 0
    },
    lng : {
        type: Number,
        default: 0
    },
    unverified: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    created_at: {
        type: String,
        default: ''
    },
    updated_at: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Dumpster', DumpsterSchema);
