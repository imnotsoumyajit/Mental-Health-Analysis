import mongoose, { Schema, models, model } from "mongoose";

const UserResponsesSchema = new Schema({
	assignment_id: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "QaAssignment",
    },
	
    question_response:[{
        question_id:String,
        response:String
    }],

    analysis_result:{
        type:String
    },
   
    created_at: {
        type: Date,
        default: Date.now
    },
});

export default
	models.QaAssignment ?? model("QaAssignment", UserResponsesSchema);