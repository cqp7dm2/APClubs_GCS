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

//The firebase.init below is commented out as the userProfile page uses 2 js files
//Both have firebase.init. If you init it more than once without providing separate arguements it will produce an error

// firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//when the page run ,the code will be call to display all data from the db to the user.
//will be judge according to the user ID and carry out the data under the register User ID.

var database = firebase.database();
var profileref = database.ref('users');
profileref.once('value', getinfo);
var adminref = database.ref('admins');
adminref.once('value');

function getinfo() {

  var currentUID = firebase.auth().currentUser.uid;

  if (firebase.auth().currentUser !== null) {

    console.log("user id: " + firebase.auth().currentUser.uid);

    var ref = firebase.database().ref('users');
    ref.once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        var fullname = childData.FullName;
        var tpnumber = childData.TPNumber;
        var intakecode = childData.IntakeCode;
        var dob = childData.DateOfBirth;
        var email = childData.Email;
        var userdescription = childData.Description;
        var key = childSnapshot.key;

        if (key == currentUID) {
          document.getElementById('userFullName').value = fullname;
          document.getElementById('tpNumber').value = tpnumber;
          document.getElementById('intakeCode').value = intakecode;
          document.getElementById('Email').value = email;
          document.getElementById('dob').value = dob;
          document.getElementById('userDesc').value = userdescription;
        }
      });
    });
  }
};

function updateuserdata(){

  var currentUID = firebase.auth().currentUser.uid;
  var userDescription = document.getElementById("userDesc").value;

  firebase.database().ref("users/" + currentUID).update(
      {
            Description: userDescription
      },
      (error) =>{
          if(error){
              alert("Record was not updated, there was some problem!");
          }else{
              alert("Record was updated!");
              location.reload();
              return false;
          }
      }
  )
}
