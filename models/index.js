const User = require('./User');
const Plans = require('./SetPlans')
const Exercises = require('./Exercises')
const Workout = require('./UserWorkout')

// const Photos = require('./Photos')
// const FitnessData = require('./UserFitnessData')

//TODO: sort out on delete functionality/relationships
Plans.hasMany(Workout,{
    foreignKey: 'plan_id'
});

Plans.hasMany(Exercises,{
    foreignKey: 'plan_id'
});

Plans.belongsToMan(User,{
    foreignKey: 'plan_id'
})

Exercises.belongsToMany(Plans,{
    foreignKey: 'exercise_id',
});

Workout.hasMany(Plans,{
    foreignKey: 'workout_id'
});

Workout.belongsToMany(User,{
    foreignKey: 'workout_id'
});

User.hasMany(Plans,{
    foreignKey: 'user_id'
});

User.hasOne(Workout,{
    foreignKey: 'user_id'
});



module.exports = { User, Plans,  Exercises, Workout /**Photos, FitnessData*/};


//DEPRECATED, ONLY USE IF MVP IS EXPANDED TO INCLUDE EITHER PHOTOS OR OVER TIME FITNESS TRACKING
// User.hasOne(FitnessData,{

// });

// User.hasMany(Photos,{

// });

// User.hasMany(Photos, {
//     foreignKey: 'user_id'
// });