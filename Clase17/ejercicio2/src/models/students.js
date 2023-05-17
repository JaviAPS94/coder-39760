import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const studentCollection = 'students';

const studentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    grade: Number,
    group: String
});

studentSchema.plugin(mongoosePaginate);

const studentModel = mongoose.model(studentCollection, studentSchema);

export default studentModel;