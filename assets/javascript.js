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

// Use empty strings as intial values for the input
var name = "";
var destination = "";
var firstTrain = "";
var frequency = "";

/* $(document).ready(function() {
  database.ref().on("value", function(snapshot) {
    var response = snapshot.val();
    console.log(response);
  });
 }); */

$("#add-train").on("click", function() {
  name = $("#train-input")
    .val()
    .trim();
  console.log(name);
  destination = $("#destination-input")
    .val()
    .trim();
  firstTrain = $("#first-input")
    .val()
    .trim();
  frequency = $("#frequency-input")
    .val()
    .trim();

  firebase.database().set({
    trainname: name,
    destination: destination,
    firstTrain: firsttraintime,
    frequency: frequency
  });
});
