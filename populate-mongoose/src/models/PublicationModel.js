import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
    title: String,
    content: String,
    autor: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true,
    versionKey: false
});

export const PublicationModel = mongoose.model('Publication', publicationSchema)