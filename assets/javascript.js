var config = {
  apiKey: "AIzaSyAFytS6aYdCqD9ANA0PNwajGb8J8QWdxYQ",
  authDomain: "train-scheduler-753b4.firebaseapp.com",
  databaseURL: "https://train-scheduler-753b4.firebaseio.com",
  projectId: "train-scheduler-753b4",
  storageBucket: "",
  messagingSenderId: "333252344012"
};

firebase.initializeApp(config);

// create a varibale to reference the datatbase
var database = firebase.database();
console.log("database: ", database);

// Use empty strings as intial values for the input
var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = "";

// create an on click function for the submit button,
$("#add-train").on("click", function() {
  console.log("clicked on add-train");
  trainName = $("#train-input")
    .val()
    .trim();
  console.log(trainName);
  destination = $("#destination-input")
    .val()
    .trim();
  firstTrain = $("#first-input")
    .val()
    .trim();
  frequency = $("#frequency-input")
    .val()
    .trim();

  // this is where we push the information into our database
  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  });
});

// this holding the value of the child added
database.ref().on("child_added", function(childsnapshot) {
  console.log(childsnapshot.val());
  var trainName = childsnapshot.val().trainName;
  var destination = childsnapshot.val().destination;
  var firstTrain = childsnapshot.val().firstTrain;
  var frequency = childsnapshot.val().frequency;
});

// this will change the html display with the new snapshot input value
database
  .ref()
  .orderByChild("dateAdded")
  .limitToLast(1)
  .on("child_added", function(snapshot) {
    $("#train-display").text(snapshot.val().trainName);
    $("#destination-display").text(snapshot.val().destination);
    $("#frequency-display").text(snapshot.val().frequency);
    $("#next-arrival-display").text(snapshot.val().firstTrain);
  });
