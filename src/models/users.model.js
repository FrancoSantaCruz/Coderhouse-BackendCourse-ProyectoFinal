import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fromGoogle: {
        type: Boolean,
        default: false
    },
    fromGithub: {
        type: Boolean,
        default: false
    },
    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Carts"
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'premium'],
        default: 'user',
    },
    restore_password: {
        type: String,
        default: "false"
    }
})

export const usersModel = mongoose.model('Users', usersSchema);