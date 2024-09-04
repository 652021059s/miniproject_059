const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true,},
  category: { type: String,required: true,},
  branch: { type: String,equired: true, },
  workDays: { type: Number,required: true,},
  workHours: { type: Number, default: 0, },
  leaveSick: {type: Number, default: 0,},
  leavePersonal: {type: Number, default: 0,},
  leaveRelax: { type: Number, default: 0,},
  leaveSpecial: {type: Number, default: 0,},
  workOutside: { type: Number, default: 0,},
  reportLate: {type: Number,default: 0,},
  totalWork: {type: Number,required: true,},
  noTimeLoggedCount: {type: Number,default: 0,},
  daysWithoutTimeLog: {type: Number,default: 0,},
});
module.exports=mongoose.model('USer',userSchema);


