const { Sequelize,  DataTypes, Op} = require('sequelize');

const sequelize = new Sequelize('app', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    published: {
        type: DataTypes.DATE,
        allowNull: false
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

const Genre = sequelize.define('Genre', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});


User.hasMany(Book, {
    foreignKey: {
        name: 'author_id',
        allowNull: false
    }
});

Book.belongsTo(User, {
    foreignKey: {
        name: 'author_id',
        allowNull: false
    }
});

Genre.hasMany(Book, {
    foreignKey: {
        name: 'genre_id',
        allowNull: false
    }
});

Book.belongsTo(Genre, {
    foreignKey: {
        name: 'genre_id',
        allowNull: false
    }
});

;(async () => {
    try {
        await User.sync({
            alter: true,
            force: false
        })

        const user = await User.create({ name: "Gani", last_name: "Doffke", country: 'Poland' });
        console.log("Jane's auto-generated ID:", user.id);

        const users = await User.findAll({
            where: {
                country: 'Poland'
            }
        });

       /* const users = await User.findOne({
            where: {
                country: 'Poland'
            }
        });
        console.log(users);

        const user = await User.findByPk(5);
        await user.destroy();*/

    } catch (error) {
        console.error(error);
    }
})();
