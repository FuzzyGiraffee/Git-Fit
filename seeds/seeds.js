const sequelize = require('../config/connection');
const { User, Plans, Photos, FitnessData, Exercises, Workout } = require('../models');

const exerciseSeedData = require('./exercises.json');
const plansSeedData = require('./plans.json')

seedDatabase();