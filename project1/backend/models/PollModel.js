const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PollOptionSchema = new Schema({
    pollOption:{type: String,required:false},
    pollCount: { type: Number, default: 0 ,required:false},
    polledPersons:{type: [String],required:false}
  });
const PollModelSchema = new Schema({
  _id: Schema.Types.ObjectId,
  pollQuestion: String,
  pollCreator: String,
  pollTag:String,
  pollOptions:[PollOptionSchema],//[{opton1:2,option2:3}]
  pollDescription:{type:[String],required:false,default:["default user comment"]}
 
});

// Export function to create "SomeModel" model class
module.exports = mongoose.model("PollModel", PollModelSchema);
