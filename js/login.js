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

//firebase login
function login() {
  var loginemail = document.getElementById("loginemail").value;
  var loginpassword = document.getElementById("loginpassword").value;

  firebase.auth().signInWithEmailAndPassword(loginemail, loginpassword).then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = "preindex.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage  = error.message;

    window.alert("Error: " + 
    errorMessage);
  });
}

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.

//     window.location.href = "home.html";

//     var user = firebase.auth().currentUser;

//   } else {
//     // No user is signed in.

//   }
// });

function logout() {
  window.alert("You have signed out successfully");
  window.location.href = "login.html";
  firebase.auth().signOut().then(() => {
    }).catch((error) => {
      console.log(error);
    });
  };

  function userProfile() {
    window.location.href = "userProfile.html";
    };
