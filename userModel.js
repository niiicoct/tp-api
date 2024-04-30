const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
    marca:{
        type: String
    },
    modelo:{
        type: String
    },
    talles:{
        type: String
    },
    precio:{
        type: String
    }
},
{
    timestamps: true,
    versionKey: false,
})

const ModelUser = mongoose.model("users", userModel);
module.exports = ModelUser;

//Sneaker_Marca, modelo, talles, precio