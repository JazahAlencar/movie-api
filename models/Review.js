const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 5 }
  },
  comment: {
    type: DataTypes.STRING(1000),
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true // permite NULL
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: true // permite NULL
  },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Review;