const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    year: Number,
    month: Number,
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'name cannot be more than 50 characters']
    },
    group: {
        type: String,
        required : [true, 'Please add a group name'],
    },
    
    value: mongoose.Decimal128
    
})