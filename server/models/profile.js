import mongoose from 'mongoose';

const profileSchima = mongoose.Schema({
    name: String,
    email: String,
    Nationality: String,
    location: String,
    gender: String,
    Education: String,
    Degree: String,
    Birthday: String,
    Skills: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var Profile = mongoose.model('Profile', profileSchima);

export default Profile;