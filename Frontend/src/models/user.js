import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
	username: {
        type: String,
        required: true
    },
	email: {
        type: String,
        unique: true,
        required: true
    },
	password: {
        type: String,
        required: true
    },
    lastlogin_date: {
        type: Date,
        default: Date.now
    },
	registration_date: {
        type: Date,
        default: Date.now
    },
});

export default
	models.User ?? model("User", UserSchema);