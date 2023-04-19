import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js'

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = {
        name: 'Sebastian'
    };

    res.render('index', user)
})

app.listen(8081, () => console.log('Listening on port 8081'));