const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const PlaylistSchema = new moongoose.Schema({
    title : {
        type :  String,
        required: true,
    },
    owner: {
        type :  mongoose.Types.ObjectId,
        ref : "User",
        required: true,
    },
    image : {
        type: String,
    },
    songs: [{
        type :  mongoose.Types.ObjectId,
        ref : "Song",
    }],
    collaborators: [{
        type :  mongoose.Types.ObjectId,
        ref : "User",
    }],
});

const PlaylistModel = moongoose.model('Playlist', PlaylistSchema);

module.exports = PlaylistModel;