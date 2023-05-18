const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const donerSchema = new Schema({
    name: {
        type: String,
        required: true  
    },

    contactnumber:{
        type: Number,
        required: true

    },

    address:{
        type: String,
        required: true
    },

    totaldonations :{
        type: Number,
        required: true
    },

    memberid:{
        type: Number,
        required: true
    }

})

const donor = mongoose.model('donor', donerSchema);

module.exports = donor;