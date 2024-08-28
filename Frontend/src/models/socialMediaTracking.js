import mongoose, { Schema, models, model } from "mongoose";

const SocialMediaTrackingSchema = new Schema({
	user_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
	platform:{
        type: String
    },
	post_id:{
        type: String
    },
    post_content: {
        type: String,
    },
    post_date:{
        type: Date
    },
    analysis_result:{
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

export default
	models.SocialMediaTracking ?? model("SocialMediaTracking", SocialMediaTrackingSchema);