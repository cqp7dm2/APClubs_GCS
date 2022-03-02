var firebaseConfig = {
  apiKey: "AIzaSyAjo6GpWkuFXh9lQ4wf6bkMbSUXgSth97M",
  authDomain: "kyoyu-367ba.firebaseapp.com",
  databaseURL: "https://kyoyu-367ba.firebaseio.com",
  projectId: "kyoyu-367ba",
  storageBucket: "kyoyu-367ba.appspot.com",
  messagingSenderId: "872119521107",
  appId: "1:872119521107:web:d4cc320e6f4ae268d15ba6",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var valuid;
var database = firebase.database();

//link from reserve to payments
// var postOwner = document.getElementById("name");
window.valuname = 'Driver';

function reserve() {
  var uid = firebase.auth().currentUser.uid;

  var postOwner = document.getElementById("name").innerHTML;
  var postDetail = document.getElementById("new-post").value;
  //date
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  //time
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var ref = database.ref("/reservation/");
  //       query.once("value")
  //         .then(function(snapshot) {
  //           snapshot.forEach(function(childSnapshot) {
  //             var uidkey = childSnapshot.key;
  //             var query2 = firebase.database().ref("post").child(uidkey).orderByKey();
  //               query2.once("value")
  //                 .then(function(snapshot) {
  //                   snapshot.forEach(function(childSnapshot) {
  //                     var key = childSnapshot.key;
  //                     // console.log("key" + key);
  //                     var ref2 = firebase.database().ref("post").child(uidkey).child(key);
  //                     ref2.once("value");
  //                     console.log("ref2" + ref2);


                      var reserveData = {
                        UserID: uid,
                        ReservationDate: date,
                        ReserveationTime: time,

                      }
                        ref.push(reserveData);
                        window.location.href = "payment.html";



}
