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
var profileref = database.ref('users');
profileref.once('value', getinfo);
var adminref = database.ref('admins');
adminref.once('value');

function getinfo() {

    var currentUID = firebase.auth().currentUser.uid;

    if (firebase.auth().currentUser !== null) {

        console.log("user id: " + firebase.auth().currentUser.uid);

        var ref = firebase.database().ref('admin');
        var committeeref = firebase.database().ref('committee');
        ref.once("value", function (snapshot) {
            var uidlist = Object.keys(snapshot.val());
            console.log("Admin list: " + uidlist);
            if (uidlist.includes(currentUID)) {
                console.log("User is an admin");
            } else {
                console.log("User is NOT an admin");
                var adminbtn = document.getElementById("adminbtn");
                adminbtn.remove();
            }
            committeeref.once("value", function (snapshot) {
                var uidlist = Object.keys(snapshot.val());
                console.log("Committee list: " + uidlist);
                if (uidlist.includes(currentUID)) {
                    console.log("User is committee member");
                } else {
                    console.log("User is NOT committee member");
                    var committeebtn = document.getElementById("committeebtn");
                    committeebtn.remove();
                }
            });
        });
}
}
