import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    publications: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Publication'
        }
    ]
},{
    versionKey: false
})

export const UserModel = mongoose.model('User', userSchema)