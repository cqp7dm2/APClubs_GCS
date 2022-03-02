var firebaseConfig = {
  apiKey: "AIzaSyAjo6GpWkuFXh9lQ4wf6bkMbSUXgSth97M",
  authDomain: "kyoyu-367ba.firebaseapp.com",
  databaseURL: "https://kyoyu-367ba.firebaseio.com/",
  projectId: "kyoyu-367ba",
  storageBucket: "kyoyu-367ba.appspot.com",
  messagingSenderId: "872119521107",
  appId: "1:872119521107:web:d4cc320e6f4ae268d15ba6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var database = firebase.database();
var usersref =  database.ref('users');
usersref.once('value');
var adminref = database.ref('admins');
adminref.once('value');

function updateuserdata(){

    // DatabaseReference ref = FirebaseDatabase.getInstance().getReference().child("users")
    var ncurrentUID = firebase.auth().currentUser.uid;
    // var childkey = firebase.database().ref("users/" + ncurrentUID).key;
    // var key = Object.keys(childkey.val());
    var nfullname = document.getElementById('userFullName').value;
    var nemail = document.getElementById('Email').value;
    var nicnumber = document.getElementById('icNumber').value;
    var ndob = document.getElementById('dob').value;
    var nphonenumber = document.getElementById('phoneNumber').value;
    var wcreditcard = document.getElementById('creditcard').value;
    var wcreditcarddate = document.getElementById('creditcarddate').value;

    //to get the UserUID from firebase auth
    // var checkUID = admin.auth().getUser(ncurrentUID);
    var checkUID = firebase.auth().currentUser;
    // alert(checkUID);

    //to get the uid and display it out
    var user = firebase.auth().currentUser;
    var uid;

    if (user != null) {
      uid = user.uid;
      // alert(uid);
      var pathToUser = firebase.database().ref('/users/' + uid);
      alert(pathToUser);
      var repush = {

          FullName: nfullname,
          Email: nemail,
          ICNumber: nicnumber,
          DateOfBirth: ndob,
          MobileNumber: nphonenumber,
          CreditCard: wcreditcard,
          CreditCardExp: wcreditcarddate,
          RatingRate:{
              dcount : 0 ,
          }
      }


            pathToUser.once("value", snapshot => {
              if(snapshot.exists() == 0){
                // alert("Not Exist");
                pathToUser.push(
                  repush

                );
                location.reload();
                window.location.href = "profile.html";
                alert("User Successfully Activated , Welcome Back to Kyoyu !");
              }else if(snapshot.exists() == 1){
                // alert("Exist");
                var ref = firebase.database().ref('/users/' + ncurrentUID);
                ref.once("value")
                .then(function(snapshot) {
                console.log(ncurrentUID);
                uidkey = snapshot.key;
                console.log(snapshot.val());
                var key = Object.keys(snapshot.val());
                var newkey = key.toString();
                console.log(newkey);
                var newref = firebase.database().ref('/users/' + ncurrentUID).child(newkey);
                var damnref = database.ref('users/' + ncurrentUID);
                console.log(newref.key);
                newref.update({
                  FullName: nfullname,
                  Email: nemail,
                  ICNumber: nicnumber,
                  DateOfBirth: ndob,
                  MobileNumber: nphonenumber,
                  CreditCard: wcreditcard,
                  CreditCardExp: wcreditcarddate,
                });
              });

              alert("User Data Updated Successfully");
              location.reload();
              window.location.href = "profile.html";
              }else{
                alert("Server Down");

              }
            });


            // if (false) {
            //   alert("it exists");
            //   // Normal Upload data
            //   var ref = firebase.database().ref('/users/' + ncurrentUID);
            //   ref.once("value")
            //   .then(function(snapshot) {
            //   console.log(ncurrentUID);
            //   uidkey = snapshot.key;
            //   console.log(snapshot.val());
            //   var key = Object.keys(snapshot.val());
            //   var newkey = key.toString();
            //   console.log(newkey);
            //   var newref = firebase.database().ref('/users/' + ncurrentUID).child(newkey);
            //   var damnref = database.ref('users/' + ncurrentUID);
            //   console.log(newref.key);
            //   newref.update({
            //     FullName: nfullname,
            //     Email: nemail,
            //     ICNumber: nicnumber,
            //     DateOfBirth: ndob,
            //     MobileNumber: nphonenumber,
            //     CreditCard: wcreditcard,
            //     CreditCardExp: wcreditcarddate,
            //   });
            // });
            //
            // alert ("User data had been updated")
            // }else{
            //   // Push new data to the Firebase
            //   pathToUser.push(
            //     repush
            //   );
            //   alert("User had been activated (Here is PUSH) , Welcome back to Kyoyu.");
            // }



          // location.reload();
          // window.location.href = "profile.html";
        }

    }
