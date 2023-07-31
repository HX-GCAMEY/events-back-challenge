const mongoose = require("mongoose");
const {Schema} = mongoose;

const eventSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  location: {type: String, required: true},
  date: {type: Date, required: true},
  time: {type: String, required: true},
  notification: {
    type: Boolean,
    default: false,
  },
});

const EventModel = mongoose.model("Event", eventSchema);

module.exports = EventModel;
