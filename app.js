const express = require('express');
const { init, User, Genre, Book } = require('./models/init');

const app = express();

app.get('/', async (req, res) => {
    const items = await User.findAll({
        include: Book
    });
    return res.json(items);
});

app.get('/books/:id', async (req, res) => {
    const items = await Book.findOne({
        where: {
            id: req.params.id
        },
        include: [User, Genre]
    });
    return res.json(items);
});

app.listen(3000, async () => {
    await init();
});