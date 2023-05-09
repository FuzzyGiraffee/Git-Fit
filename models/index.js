    const User = require('./User');
    const Plans = require('./SetPlans')
    const Exercises = require('./Exercises')
    const UserWorkout = require('./UserWorkout')
    const UserExercises = require('./userExercises')

    // const Photos = require('./Photos')
    // const FitnessData = require('./UserFitnessData')

    //TODO: sort out on delete functionality/relationships
        //when a user is deleted, so are their exercises and plans



    Plans.hasMany(Exercises,{
        foreignKey: 'plan_id'
    });

    Exercises.belongsTo(Plans,{
        foreignKey: 'plan_id',
    });


    UserWorkout.hasOne(User,{
        foreignKey: 'userworkout_id'
    });

    User.hasOne(UserWorkout,{
        foreignKey: 'user_id'
    });

    User.hasOne(UserExercises,{
        foreignKey: 'user_id'
    });

    UserExercises.hasOne(User,{
        foreignKey: 'userexercises_id' 
    });

    UserExercises.hasOne(UserWorkout,{
        foreignKey: 'userexercises_id'
    });

    UserWorkout.hasMany(UserExercises,{
        foreignKey: 'userworkout_id'
    });

    module.exports = { User, Plans,  Exercises, UserWorkout, UserExercises /**Photos, FitnessData*/};


//DEPRECATED, ONLY USE IF MVP IS EXPANDED TO INCLUDE EITHER PHOTOS OR OVER TIME FITNESS TRACKING
// User.hasOne(FitnessData,{

// });

// User.hasMany(Photos,{

// });

// User.hasMany(Photos, {
//     foreignKey: 'user_id'
// });