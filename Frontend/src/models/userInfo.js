import mongoose, { Schema, models, model } from "mongoose";

const UserInfoSchema = new Schema({
	user_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
	fullname:{
        type: String,
        required: true
    },
	dateofbirth:{
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    country:{
        type: String,
        required: true
    },
    facebook:{
        type: String,
    },
    instagram:{
        type: String,
    },
    twitter:{
        type: String,
    },
    linkedin:{
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

export default
	models.UserInfo ?? model("UserInfo", UserInfoSchema);