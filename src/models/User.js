import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    _id: String,
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

const User = mongoose.model('User', UserSchema, 'users')

export default User