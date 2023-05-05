import { Router } from 'express';
import { userModel } from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.send({ result: 'success', payload: users });
    } catch (error) {
        res.status(500).send({ error });
    }
});

//CREATE

router.post('/', async (req, res) => {
    const { first_name, last_name, email } = req.body;

    if (!first_name || !last_name || !email) {
        return res.status(400).send({ error: 'Incomplete values' });
    }

    try {
        const result = await userModel.create({
            first_name,
            last_name,
            email
        });

        res.send({ result: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ error });
    }
});


// UPDATE
router.put('/:uid', async (req, res) => {
    const { uid } = req.params;

    const userToReplace = req.body;

    if (!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email) {
        return res.status(400).send({ error: 'Incomplete values' });
    }

    try {
        const result = await userModel.updateOne({ _id: uid }, userToReplace);
        res.send({ result: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ error });
    }
});

// DELETE
router.delete('/:uid', async (req, res) => {
    const { uid } = req.params;

    try {
        const result = await userModel.deleteOne({_id: uid});
        res.send({ result: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ error }); 
    }
})

export default router;