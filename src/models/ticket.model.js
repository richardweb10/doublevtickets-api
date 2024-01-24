const mongoose = require("mongoose");
const { Schema } = mongoose;

const TicketSchema = new Schema({
    usuario: { type: String },
    state: { 
        type: String,
        enum: ['open','closed'],
        default: 'open'  
    },
    
},
{
    timestamps: true,
});


module.exports = mongoose.model("Ticket", TicketSchema);