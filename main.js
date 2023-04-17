class Workout {
    constructor(name, mg, description, ytLink, image) {
        this.name_ = name;
        this.muscleGroup_ = mg;
        this.description_ = description;
        this.ytLink_ = ytLink;
        this.image_ = image;
    }


    printWorkout() {
        console.log("Name: " + this.name_);
        console.log("Muscle Group: " + this.muscleGroup_);
        console.log("Description: " + this.description_);
        console.log("YouTube Link: " + this.ytLink_);
        console.log("Image (Link): " + this.image_);
    }
}


function main() {
    let dbCurls = new Workout("Dumbell Curls", "Upper Body", "blah blah", "https://www.youtube.com/watch?v=ykJmrZ5v0Oo&ab_channel=Howcast", "\\assets\\dumbellCurl.jpg")
    dbCurls.printWorkout();
}