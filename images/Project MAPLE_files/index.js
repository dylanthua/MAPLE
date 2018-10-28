var sampleID = "bob";
var samplePwd = "password";

var loggedIn = false;

<!-- logging in with account -->
$("#login-btn").click(login);
function login(e){
    var id = $("#userID").val();
    var pwd = $("#userPassword").val();

    if(id === sampleID && pwd === samplePwd) {
        loggedIn = true;
        window.location.replace("activity.html");
    }else {
        alert("account not found");
    }
    e.preventDefault();
}

<!-- for joining an existing poll. -->
const pollCode = "1a234b";
$("#join-btn").click(join);
function join(e){
    var code = prompt("Please enter poll code");
    if(code == null || code === ""){
    }else{
        if(code === pollCode){
            alert("JOINING");
        }else{
            alert("POLL NOT FOUND!");
        }
    }

    e.preventDefault();
}

<!-- guest poll creation -->
$("#guest-btn").click(guest);
function guest(e){
    loggedIn = false;
    window.location.replace("activity.html");
    e.preventDefault();
}

$("#add-activities").click(findActivities);

function findActivities(e){
    alert("looking for activites");
}

$("#back").click(backToHome);
function backToHome(e){
    if(confirm("are you sure you want to exit?")){
        loggedIn = false;
        window.location.replace("index.html");
    }
    e.preventDefault();
}