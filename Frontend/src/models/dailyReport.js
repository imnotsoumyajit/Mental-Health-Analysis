import mongoose, { Schema, models, model } from "mongoose";

const DailyReportSchema = new Schema({
	user_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
	
    report_date:{
        type: Date,
    },
    analysis_summary:{
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

export default
	models.DailyReport ?? model("DailyReport", DailyReportSchema);