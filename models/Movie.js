const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  duration: { 
    type: DataTypes.INTEGER,
    allowNull: true 
  },
  sinopse: { 
    type: DataTypes.TEXT,
    allowNull: true 
  },
  isActive: { 
    type: DataTypes.BOOLEAN, 
    defaultValue: true 
  }
}, {
  timestamps: true 
});

module.exports = Movie;