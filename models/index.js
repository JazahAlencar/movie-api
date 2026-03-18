const sequelize = require('../config/database');
const User = require('./user');
const Movie = require('./Movie');
const Review = require('./Review');

// Associações
User.hasMany(Review, { foreignKey: 'userId', onDelete: 'SET NULL' });
Review.belongsTo(User, { foreignKey: 'userId', onDelete: 'SET NULL' });

Movie.hasMany(Review, { foreignKey: 'movieId', onDelete: 'SET NULL' });
Review.belongsTo(Movie, { foreignKey: 'movieId', onDelete: 'SET NULL' });

module.exports = { sequelize, User, Movie, Review };