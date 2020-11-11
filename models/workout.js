const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{

        type: {
            type: String,
            trim: true,
            required: "Please enter a workout type"
        },

        name: {
            type: String,
            unique: true,
            required: "Please enter a workout name"
        },

        duration: {
            type: Number,
            required: true
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

    }]

});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;