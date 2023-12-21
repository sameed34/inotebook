const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  // // user: {
  // //   type: mongoose.Schema.Types.ObjectId,
  // //   ref: 'User'
  // // },
  // // title: {
  // //   type: String,
  // //   required: true,
  // // },
  // // description: {
  // //   type: String,
  // //   required: true,
  // //   unique: true,
  // },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now,
  },
});
module.exports = mongoose.model("Notes", NotesSchema);
