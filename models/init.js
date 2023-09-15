const sequelize = require('../DB');

const User = require('./User');
const Genre = require('./Genre');
const Book = require('./Book');


User.hasMany(Book);
Book.belongsTo(User);
Genre.hasMany(Book);
Book.belongsTo(Genre);


const init = async () => {
    await User.sync({alter: true});
    await Genre.sync({alter: true});
    await Book.sync({alter: true});

}

module.exports = { init, User, Book, Genre };