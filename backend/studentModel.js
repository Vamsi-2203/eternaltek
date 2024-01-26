const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentFormSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures email is unique in the database
  },
  phoneNo: {
    type: String,
    required: true
  }
});

const StudentForm = mongoose.model('student-form', studentFormSchema);

module.exports = StudentForm;
