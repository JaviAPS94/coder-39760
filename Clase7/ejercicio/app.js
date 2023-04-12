import express from 'express';

const app = express();

//middleware
app.use(express.json());

const users = [];


//CRUD
//READ
app.get('/users', (req, res) => {
    res.send(users);
});

//CREATE
app.post('/users', (req, res) => {
    // {
    //     first_name: 'Alex',
    //     last_name: 'Pinaida'
    // }
    const user = req.body;
    user.id = 1;

    if(!user.first_name || !user.last_name) {
        return res.status(400).send({ status: 'error', error: 'incomplete values' });
    }

    users.push(user);
    res.send({ status: 'success', message: 'user created' });
});

//UPDATE
app.put('/users/:id', (req, res) => {
    const user = req.body;
    const userId = Number(req.params.id);

    if(!user.first_name || !user.last_name) {
        return res.status(400).send({ status: 'error', error: 'incomplete values' });
    }

    const index = users.findIndex(u => u.id === userId);

    if(index !== -1) {
        users[index] = user;
        res.send({ status: 'success', message: 'user updated' })
    } else {
        res.status(404).send({ status: 'error', error: 'user not found' });
    }
});

//DELETE
app.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if(index !== -1) {
        users.splice(index, 1);
        res.send({ status: 'success', message: 'user deleted' })
    } else {
        res.status(404).send({ status: 'error', error: 'user not found' });
    }
})

app.listen(8081);