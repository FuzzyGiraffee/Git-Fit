const User = require('./User');
const Plans = require('./SetPlans')
const Photos = require('./Photos')
const FitnessData = require('./UserFitnessData')
const Exercises = require('./Exercises')
const Workout = require('./UserWorkout')

// Exercises.belongsToMany(Plans,{

// });

// Workout.belongsToMany(Exercises,{
// });

// Plans.hasMany(Workout,{

// });

// Plans.hasMany(Exercises,{
// });



//TODO: add user assications once main branch is updated by Jesus
// User.hasOne(Plans,{

// });

// User.hasOne(FitnessData,{

// });

// User.hasMany(Photos,{

// });

// User.hasMany(Workout,{

// });


User.hasMany(Photos, {
    foreignKey: 'user_id'
});

module.exports = { User, Plans, Photos, FitnessData, Exercises, Workout};
