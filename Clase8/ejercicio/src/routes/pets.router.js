import { Router } from 'express';
import { uploader } from '../utils.js';

const router = Router();

const pets = [];

router.get('/', (req, res) => {
    res.send({ pets })
});

router.post('/', (req, res) => {
    // {
    //     name: 'pepito',
    //     age: 2
    // }
    const pet = req.body;
    pets.push(pet);
    res.send({ status: 'success', pet })
});

router.post('/img', uploader.single('file'), (req, res) => {
    const filename = req.file.filename;
    const pet = req.body;
    pet.image = `http://localhost:8080/img/${filename}`;
    pets.push(pet);
    res.send({status: "success"});
})

export default router;