const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const songSchema = new moongoose.Schema({
    title : {
        type :  String,
        required: true,
    },
    artist: {
        type :  mongoose.Types.ObjectId,
        ref : "User",
    },
    albums: {
        type :  String,
        required: true,
    },
    year : {
        type: Number,
    },
    genre : {
        type: String,
    },
    duration : {
        type: Number,
        required: true,
    },
    image : {
        type: String,
        required: true,
    },
    audio : {
        type: String,
        required: true,
    }
});

const SongModel = moongoose.model('Song', songSchema);

module.exports = SongModel;