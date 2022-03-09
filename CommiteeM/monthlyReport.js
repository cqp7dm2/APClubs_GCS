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

// Database references
var database = firebase.database();

// Getting club info
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uids = user.uid;
        console.log(uids);
        firebase.database().ref('/committee/' + uids).once('value',
            function (snapshot) {
                snapshot.forEach(function (childSnapshot){
                    var club = childSnapshot.val();
                    console.log(club);
                    SelectAllData(club);
                    SelectEventData(club);
                });
            });

    }
});
// function SelectClubData() {
//     var currentUID = firebase.auth().currentUser.uid;

//     firebase.database().ref('/committee/' + currentUID).once('value',
//         function (AllRecords) {
//             AllRecords.forEach(
//                 function (CurrentRecord) {
//                     var club = CurrentRecord.val().Committee;
//                 }
//             );
//         });
// }

// Getting the data
function SelectAllData(club) {
    console.log(club);
    document.getElementById("tbody1").innerHTML = "";
    event_number = 0;

    firebase.database().ref('/clubMember/' + club).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var fullName = CurrentRecord.val().FullName;
                    var tpNumber = CurrentRecord.val().TPNumber;
                    var intakeCode = CurrentRecord.val().IntakeCode;
                    var email = CurrentRecord.val().Email;
                    AddItemsToTable(fullName, tpNumber, intakeCode, email);
                }
            );
        });
}

// Inserting data to the table
var cns_list = [];

function AddItemsToTable(fullName, tpNumber, intakeCode, email) {
    var tbody1 = document.getElementById('tbody1');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    cns_list.push([fullName, tpNumber, intakeCode, email]);

    td1.innerHTML = ++event_number;
    td2.innerHTML = fullName;
    td2.classList += "Namefield";
    td3.innerHTML = tpNumber;
    td4.innerHTML = intakeCode;
    td5.innerHTML = email;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody1.appendChild(trow);
}

// Getting the data
function SelectEventData(club) {
    console.log("Select Event Data" + club);
    document.getElementById("tbody2").innerHTML = "";
    event_number = 0;

    firebase.database().ref('event').once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    console.log(AllRecords.val());
                    var eventClub = CurrentRecord.val().event_club;
                    var eventName = CurrentRecord.val().event_name;
                    var eventDate = CurrentRecord.val().event_date;
                    var eventTime = CurrentRecord.val().event_time;
                    var eventDescription = CurrentRecord.val().event_desc;
                    var eventLocation = CurrentRecord.val().event_location;
                    if (eventClub == club){
                        AddEventsToTable(eventName, eventDate, eventTime, eventDescription,eventLocation);
                    }
                }
            );
        });
}

// Inserting data to the table
var cns_list = [];

function AddEventsToTable(eventName, eventDate, eventTime, eventDescription,eventLocation) {
    var tbody1 = document.getElementById('tbody2');
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');

    cns_list.push([eventName, eventDate, eventTime, eventDescription,eventLocation]);

    td1.innerHTML = ++event_number;
    td2.innerHTML = eventName;
    td2.classList += "Namefield";
    td3.innerHTML = eventDate;
    td4.innerHTML = eventTime;
    td5.innerHTML = eventDescription;
    td6.innerHTML = eventLocation;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);

    tbody1.appendChild(trow);
}