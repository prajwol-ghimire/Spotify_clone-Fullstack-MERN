const moongoose = require('mongoose');

// create a mongoose schema
const userSchema = new moongoose.Schema({
    username : {
        type :  String,
        required: true,
    },
    email: {
        type :  String,
        required: true,
    },
    password: {
        type :  String,
        required: true,
    },
    gender : {
        type: String,
    },
    dob : {
        type: Date,
    }
});

const UserModel = moongoose.model('User', userSchema);

module.exports = UserModel;