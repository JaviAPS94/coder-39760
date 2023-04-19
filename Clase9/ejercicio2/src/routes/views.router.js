import { Router } from "express";

const router = Router();

const food = [
    { name: "Pizza", price: 1000 },
    { name: "Hamburguesa", price: 500 },
    { name: "Papas fritas", price: 300 },
    { name: "Pollo frito", price: 500 },
    { name: "Pescado frito", price: 600 }
];

router.get('/', (req, res) => {
    const user = {
        name: 'Sebastian',
        role: 'admin'
    };

    res.render('index', {
        user,
        isAdmin: user.role === 'admin',
        food
    });
});

router.get('/register', (req, res) => {
    res.render('register');
})

export default router;