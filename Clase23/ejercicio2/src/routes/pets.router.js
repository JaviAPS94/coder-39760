import { Router } from 'express';

const router = Router();

const pets = [];

router.post('/', (req, res) => {
    const { name, specie } = req.body;
    pets.push({ name, specie });
    res.json({ info: 'pet created', pet: { name, specie } });
});

router.get('/:name([a-zA-Z20%]+)', (req, res) => {
    if(!req.pet) 
    res.json({ info: 'pet found', pet: req.pet });
});

router.put('/:name([a-zA-Z20%]+)', (req, res) => {
    if (req.pet) {
        const newPet = { ...req.pet, adopted: true };
        const index = pets.findIndex(petDB => petDB.name === req.pet.name );
        pets[index] = newPet;
        res.json({ info: 'pet updated', pet: newPet });
    } else {
        res.json({ info: 'Pet not found' })
    }
});

router.param('name', (req, res, next, name) => {
    const pet = pets.find(petDB => petDB.name === name);
    if (pet) {
        req.pet = pet;
    } else {
        req.pet = null;
    }
    next();
})

export default router;