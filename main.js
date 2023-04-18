class WorkoutManager {
    constructor() {
        this.upperBody_ = [];
        this.lowerBody_ = [];
    }

    loadWorkouts(workouts = []) {
        console.log(this.upperBody_);

        workouts.forEach(function(workout) {
            switch(workout.getMuscleGroup()){
                case "Upper Body":
                    console.log(workout);
                    console.log(this.upperBody_);
                    this.upperBody_.push(workout);
                    break;

                case "Lower Body":
                    this.lowerBody_.push(workout);
                    break;

            }
        });

    }

    printWorkouts(muscleGroup) {
        if(!muscleGroup) {
            console.log("Upper Body:\n");
            this.upperBody_.forEach(function() {
                printWorkout();
            });
            console.log("\nLower Body\n");
            this.lowerBody_.forEach(function() {
                printWorkout();
            });
        }
    }
}


class Workout {
    constructor(name, mg, description, ytLink, image) {
        this.name_ = name;
        this.muscleGroup_ = mg;
        this.description_ = description;
        this.ytLink_ = ytLink;
        this.image_ = image;
    }

    getMuscleGroup() { return this.muscleGroup_; }

    printWorkout() {
        console.log("Name: " + this.name_);
        console.log("Muscle Group: " + this.muscleGroup_);
        console.log("Description: " + this.description_);
        console.log("YouTube Link: " + this.ytLink_);
        console.log("Image (Link): " + this.image_);
    }
}

let workoutManager;
function initWorkouts() {
    let workouts = [];
    workouts.push(new Workout("Dumbell Curls", "Upper Body", "blah blah", "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast", "\\assets\\dumbellCurl.jpg"));

    workoutManager = new WorkoutManager();
    workoutManager.loadWorkouts(workouts);
    workoutManager.printWorkouts();
}

