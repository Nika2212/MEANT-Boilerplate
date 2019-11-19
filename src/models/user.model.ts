import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { unique : true }
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});


export const User = mongoose.model('User', UserSchema);
