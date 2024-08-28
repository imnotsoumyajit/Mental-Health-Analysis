import mongoose, { Schema, models, model } from "mongoose";

const QaAssignmentSchema = new Schema({
	user_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    quesion:[{
        quesion_id:String
    }],
	
    assignment_date:{
        type: Date
    },
    completion_status:{
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});

export default
	models.QaAssignment ?? model("QaAssignment", QaAssignmentSchema);