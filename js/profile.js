var firebaseConfig = {
  apiKey: "AIzaSyCtllaNW3ao2Gnel0LjGr00wYoO9dC9c5I",
  authDomain: "apclubs-678c7.firebaseapp.com",
  databaseURL: "https://apclubs-678c7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "apclubs-678c7",
  storageBucket: "apclubs-678c7.appspot.com",
  messagingSenderId: "711066755172",
  appId: "1:711066755172:web:8187fe865e562d32807f71",
  measurementId: "G-NCK9V02TE8"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//when the page run ,the code will be call to display all data from the db to the user.
//will be judge according to the user ID and carry out the data under the register User ID.

var database = firebase.database();
var profileref = database.ref('users');
profileref.once('value',getinfo );
var adminref = database.ref('admins');
adminref.once('value');

function getinfo() {

  var currentUID = firebase.auth().currentUser.uid;

  if (firebase.auth().currentUser !== null) {

    console.log("user id: " + firebase.auth().currentUser.uid);

    var ref = firebase.database().ref('users');
    ref.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var fullname = childData.FullName;
        var tpnumber = childData.TPNumber;
        var intakecode = childData.IntakeCode;
        var dob = childData.DateOfBirth;
        var email = childData.Email;
        var key = childSnapshot.key;

    if (key == currentUID) {
      document.getElementById('userFullName').value = fullname;
      document.getElementById('tpNumber').value = tpnumber;
      document.getElementById('intakeCode').value = intakecode;
      document.getElementById('Email').value = email;
      document.getElementById('dob').value = dob;}
      });
    // //find currentUID
    // var ref = firebase.database().ref('users');
    // ref.once("value", function(snapshot) {
    //     var uidlist = Object.keys(snapshot.val());
    //     for (var i = 0; i < uidlist.length; i++) {

    //       if (uidlist.includes(currentUID)) {
    //         console.log("Data Insert");

    //             var ref = firebase.database().ref('/users/' + currentUID);
    //             ref.once("value") 
    //               .then(function(snapshot) {
    //                 uidkey = snapshot.key;
    //                 key = Object.keys(snapshot.val());
    //                 console.log(key);
    //                 var fullname = snapshot.child(key).val().FullName;
    //                 var tpnumber = childData.TPNumber;
    //                 var intakecode = childData.IntakeCode;
    //                 var email = childData.Email;
    //                 var dob = childData.DateOfBirth;

    //                 document.getElementById('userFullName').value = fullname;
    //                 document.getElementById('tpNumber').value = tpnumber;
    //                 document.getElementById('intakeCode').value = intakecode;
    //                 document.getElementById('Email').value = email;
    //                 document.getElementById('dob').value = dob;
    //               });
    //               break;

    //       } else {
    //         console.log("Data not match at all");
    //       }
    //     }
    //   });
//   } else {
//     alert("Wrong Coding");
  });
 }
}
