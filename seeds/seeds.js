// const sequelize = require('../config/connection');
// const { User, Plans, Photos, FitnessData, Exercises, Workout } = require('../models');

// // const exerciseSeedData = require('./exercises.json');
// // const plansSeedData = require('./plans.json')

// const seedDatabase = async () => {
    // await sequelize.sync({ force: true });

    // const 

    // const exercises = await Exercises.bulkCreate(exerciseSeedData);
    // const plans = await Plans.bulkCreate(plansSeedData);

    // for (const { id } of exercises) {
    //     const newExercise = await Plans.create({
    //         exercise_id: id,
    //     });     
    // }

    // for (const { id } of plans) {
    //     const newPlan =  await Exercises.create({
    //         plans_id: id,
    //     })
    // }

    // for (const exercise of plansSeedData) {
    //     const exercise = await Plans.create({
    //         ...Exercises
    //     })
    //     // const workout = await Workout.create({
    //     //     ...Workout
    //     // })
    // }

    // for (const workout of exerciseSeedData) {
    //     const newWorkout = await Workout.create({
    //         ...Workout,
    //     });
    // }

   

    // process.exit(0);
// }
// seedDatabase();