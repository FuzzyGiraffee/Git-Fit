const sequelize = require('../config/connection');
const { User, Plans,  Exercises, UserWorkout, UserExercises } = require('../models');

const userSeedData = require('./users.json')
const exerciseSeedData = require('./exercises.json');
const plansSeedData = require('./plans.json')
const userWorkoutSeedData = require('./userworkout.json')

const seedDatabase = async () => {
     await sequelize.sync({ force: true });

     await User.bulkCreate (userSeedData);

     await Exercises.bulkCreate (exerciseSeedData);

     await Plans.bulkCreate (plansSeedData);

     await UserWorkout.bulkCreate(userWorkoutSeedData);


    process.exit(0);
}
seedDatabase();