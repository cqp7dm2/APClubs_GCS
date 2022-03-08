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

console.log("Test 1");

window.onload = currentUser();

function currentUser() {
    const UID = firebase.auth().currentUser;

    if (UID !== null) {

    console.log("user id2: " + firebase.auth().currentUser.uid);
    }
}
    var FullName = document.getElementById("fullName");
    var TPnum = document.getElementById("tpNumber");
    var Email = document.getElementById("Email");
    var IntakeCode = document.getElementById("intakeCode");
    var PhoNum = document.getElementById("phoNum");
    var DOB = document.getElementById("dob");
    var Club = document.getElementById("Club");
    var btnsub = document.getElementById("btn_submit");
    var status = "Pending Review";
    console.log("This is your UID:" + UID);

    function InsertData() {
        set(ref(db, "Club_Registration_Form/" + Club.value + "/" + UID), {
            FullName: FullName.value,
            TP_number: TPnum.value,
            Emailadd: Email.value,
            Intakecode: IntakeCode.value,
            Phone_number: PhoNum.value,
            DateofBirth: DOB.value,
            Status: status,

        })
            .then(() => {
                alert("data stored successfully");
            })
            .catch((error) => {
                alert("unsuccessful,error" + error);
            });
    }

    /////////Assign btn/////////////
    btnsub.addEventListener("click", InsertData);


