// const sequelize = require('../config/connection');
// const { User, Plans, Exercises, UserWorkout, UserExercises } = require('../models');

// const userSeedData = require('./users.json')
// const exerciseSeedData = require('./exercises.json');
// const plansSeedData = require('./plans.json')
// const userExercises = require('plans.json')

// const seedDatabase = async () => {
//     await sequelize.sync({ force: true}); 

//     const setPlans = await Plans.bulkcreate (plansSeedData)
//     const user = await User.bulkcreate(userSeedData)
//     const exercises = await Exercises.bulkcreate(exerciseSeedData)
    
//     //a user has many exercises and one workout
//     const users = await User.bulkCreate(renderSeedData,{
//         individualHooks: true,
//         returning: true
//     });

//     for (const exercise of exercises){
//         const newExercise = await Exercises.create({
//             ...exercise,
//             user_id: id
//         })
//     }

//     for (const { id } of workouts){
//         const newWorkout = await UserWorkout.create({
//             user_id: id
//         });
//     }

//     //a plan has many exercises

//     //a exericse belongs to a plan
    
//     //a workout has many exercises
   

   

//     process.exit(0);
// }

// seedDatabase();
const sequelize = require('../config/connection');
const { User, Plans, Exercises, UserWorkout, UserExercises } = require('../models');

const userSeedData = require('./users.json');
const exerciseSeedData = require('./exercises.json');
const plansSeedData = require('./plans.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Create plans
  const plans = await Plans.bulkCreate(plansSeedData);

  // Create exercises
  const exercises = await UserExercises.bulkCreate(exerciseSeedData);

  // Create users
  const users = await User.bulkCreate(userSeedData);

  // Create user exercises (many-to-many relationship between users and exercises)
  for (const user of users) {
    for (const exercise of exercises) {
      await user.addExercise(exercise);
    }
  }

  // Create user workouts (many-to-many relationship between users and plans)
  for (const user of users) {
    for (const plan of plans) {
      const workout = await UserWorkout.create({
        plan_id: plan.id,
      });
      await user.addWorkout(workout);
    }
  }

  process.exit(0);
};

seedDatabase();