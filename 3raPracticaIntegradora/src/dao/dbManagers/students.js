import { studentModel } from '../models/students.js';

export default class Students {
    constructor() {
        console.log('Working students with DB');
    }

    getAll = async () => {
        const students = await studentModel.find().lean();
        return students;
    }

    getAllPaginated = async (limit, page) => {
        const students = await studentModel.paginate({}, { limit, page, lean: true });
        return students; 
    }

    save = async (student) => {
        const result = await studentModel.create(student);
        return result;
    }

    getById = async (id) => {
        const student = await studentModel.findOne({_id: id});
        return student.toObject();
    }
    //PUT PATCH
    //PUT: actualiza toda la entidad
    //PATH: actualiza solo ciertos campos de esa entidad (no todos)

    updateById = async (id, student) => {
        //Flujo en el caso de hacer un patch
        //buscar por id para obtener el document
        //Objeto de BDD que tiene todos los atributos, el nuevo objeto parcial
        //Hacer un merge de esos objetos usando Object.assign(Objeto BDD, Objeto parcial)
        const result = await studentModel.updateOne({_id: id}, student);
        return result;
    }
}