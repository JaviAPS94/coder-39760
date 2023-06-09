import { Router } from 'express';

const router = Router();

const words = ['test'];

//TEST124
//Expresión regular nos permite validar si una cadena hace match con una condicion
router.get("/:word([a-zA-Z%C3%A1]+)", (req, res) => {
    res.send(req.params.word);
});

router.put("/:word([a-zA-Z%C3%A1]+)", (req, res) => {
    res.send(req.params.word);
});

router.delete("/:word([a-zA-Z%C3%A1]+)", (req, res) => {
    res.send(req.params.word);
});

router.param('word', (req, res, next, word) => {
    const serachWord = words.find(wordDB => wordDB === word);
    if(!serachWord) {
        return res.status(404).send('Word not found');
    };
    req.word = serachWord;
    next();
});

router.get('*', (req, res) => {
    res.status(404).send('Cannot get specified word');
});

export default router;