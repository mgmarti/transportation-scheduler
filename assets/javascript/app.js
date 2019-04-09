 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCImU1ctqpI5dgUKfSpu3sCukD7UiamRBU",
    authDomain: "train-scheduler-d67dd.firebaseapp.com",
    databaseURL: "https://train-scheduler-d67dd.firebaseio.com",
    projectId: "train-scheduler-d67dd",
    storageBucket: "train-scheduler-d67dd.appspot.com",
    messagingSenderId: "97855616553"
  };
  firebase.initializeApp(config);
  console.log(config)
  let trainName = "";
  let trainDestination = "";
  let trainTime = "";
  let trainFrequency = "";

  $("#submit").on("click", function(event){
    event.preventDefault();

  trainName = $("#train-name").val().trim();
  trainDestination = $("#train-destination").val().trim();
  trainFrequency = $("#train-frequency").val().trim();

  firebase.database().ref().push({
    trainName: trainName,
    trainDestination: trainDestination,
    trainFrequency: trainFrequency,
    });

})

firebase.database().ref().on("value", function(snapshot){
    console.log(snapshot.val());
  $("#trainNameDisplay").html(snapshot.val().trainName);
  $("#destinationDisplay").html(snapshot.val().trainDestination);
  $("#frequencyDisplay").html(snapshot.val().trainFrequency);
  $("#divider").html();
    console.log(snapshot.val());
})


firebase.database().ref().on("child_added", function(childSnapshot) {
  $("#train-name-display").append("<p>" +childSnapshot.val().trainName+"</p>")
  $("#destination-display").append("<p>" +childSnapshot.val().trainDestination+"</p>")
  $("#frequency-display").append("<p>" +childSnapshot.val().trainFrequency+"</p>")
    console.log(childSnapshot);
})
