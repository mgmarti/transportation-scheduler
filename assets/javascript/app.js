 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB0AO_D_Yz46kuXbp32LLAvC-ZE_Iy0UTI",
    authDomain: "scheduler-c546c.firebaseapp.com",
    databaseURL: "https://scheduler-c546c.firebaseio.com",
    projectId: "scheduler-c546c",
    storageBucket: "scheduler-c546c.appspot.com",
    messagingSenderId: "93316995768"
  };
  firebase.initializeApp(config);

  let trainName = "";
  let trainDestination = "";
  let trainTime = "";
  let trainFrequency = "";

  $("submit").on("click", function(event) {
      event.preventDefault();

    trainName = $("#trainNameDisplay").val().trim();
    trainDestination = $("#destinationDisplay").val().trim();
    trainFrequency = $("#frequencyDisplay").val().trim();
   

    firebase.database().ref().push({
        trainName: trainName,
        trainDestination: trainDestination,
        trainFrequency: trainFrequency,
        trainTime: trainTime
      });
  })