import courseModel from './models/courses.js';
import studentModel from './models/students.js';
import userModel from './models/users.js';
import mongoose from 'mongoose';

const environment = async () => {
    try {
        await mongoose.connect('mongodb+srv://alexpinaida39760:xHCGeiHfxtywJWXe@cluster39760ap.abysesb.mongodb.net/clase16?retryWrites=true&w=majority');
        //const response = await userModel.find({ first_name: 'Alex' }).explain('executionStats');

        // await studentModel.create({
        //     first_name: 'Nora',
        //     last_name: 'Saucedo',
        //     email: 'ns@hotmail.com',
        //     gender: 'F'
        // });

        // await courseModel.create({
        //     title: 'Programación backend',
        //     description: 'Curso con node y express',
        //     teacher: 'Alex Pinaida'
        // });

        //Relation
        // const student = await studentModel
        //     .findOne({ _id: "645d7c6a7ade91e8ce67bf4a" })

        // console.log(student);

        // student.courses.push({ course: '645d7c6b7ade91e8ce67bf4c' })

        // const result = await studentModel
        //     .updateOne({ _id: '645d7c6a7ade91e8ce67bf4a' }, student)
        // console.log(result);

        const response = await studentModel.find();
        console.log(JSON.stringify(response, null, '\t'));


        console.log('Terminó el proceso');
    } catch (error) {
        console.log(error);
    }
}

environment();