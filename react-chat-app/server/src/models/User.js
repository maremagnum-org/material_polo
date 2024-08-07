import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    online: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
});

UserSchema.methods.toJSON = function () {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}


export default model('User', UserSchema);