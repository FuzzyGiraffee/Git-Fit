const sequelize = require('../config/connection');
const { User, Plans,  Exercises, UserWorkout, UserExercises } = require('../models');

const userSeedData = require('./users.json')
const exerciseSeedData = require('./exercises.json');
const plansSeedData = require('./plans.json')
const userWorkoutSeedData = require('./userworkout.json')

const seedDatabase = async () => {
     await sequelize.sync({ force: true });

     await User.bulkCreate (userSeedData);

     await Plans.bulkCreate (plansSeedData);

     await Exercises.bulkCreate (exerciseSeedData);

     await UserWorkout.bulkCreate(userWorkoutSeedData)
    /* const exercises = await Exercises.bulkCreate(exerciseSeedData);
    const plans = await Plans.bulkCreate(plansSeedData);

    for (const { id } of exercises) {
        const newExercise = await Plans.create({
            exercise_id: id,
        });     
    }

    for (const { id } of plans) {
        const newPlan =  await Exercises.create({
            plans_id: id,
        })
    }

    for (const exercise of plansSeedData) {
        const exercise = await Plans.create({
            ...Exercises
        })
        // const workout = await Workout.create({
        //     ...Workout
        // })
    }

    for (const workout of exerciseSeedData) {
        const newWorkout = await Workout.create({
            ...Workout,
        });
    } */

   

    process.exit(0);
}
seedDatabase();