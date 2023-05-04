const User = require('./User');
const Plans = require('./SetPlans')
const Photos = require('./Photos')
const FitnessData = require('./FitnessData')
const Exercises = require('./Exercises')
const Workout = require('./Workout')



Exercises.belongsToMany(Plans,{

});



User.hasMany(Photos, {
    foreignKey: 'user_id'
});

module.exports = { User, Plans, Photos, FitnessData, Exercises};
