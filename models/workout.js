const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{

        type: {
            type: String,
            required: "Please enter a workout type"
        },

        name: {
            type: String,
            required: "Please enter a workout name"
        },

        duration: {
            type: Number
        },

        weight: {
            type: Number
        },

        reps: {
            type: Number
        },

        sets: {
            type: Number
        },

        distance: {
            type: Number
        }

    }, ]



    // Virtuals for adding total duration of the added workout and make duration a single value

}, { toJSON: { virtuals: true } });
workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;