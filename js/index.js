var sampleID = "bob";
var samplePwd = "password";

var loggedIn = false;
var creator = true;
var activities = [];

<!-- logging in with account -->
$("#login-btn").click(login);
function login(e){
    var id = $("#userID").val();
    var pwd = $("#userPassword").val();

    if(id === sampleID && pwd === samplePwd) {
        creator = true;
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
            creator = false;
            window.location.replace(code+".html");
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
    creator = true;
    window.location.replace("activity.html");
    e.preventDefault();
}

<!-- signup will add modal later -->
$("#signup").click(signup);
function signup(e){

    e.preventDefault();
}

<!-- activities.html -->
$("#back").click(backToHome);
function backToHome(e){
    if(confirm("are you sure you want to exit?")){
        loggedIn = false;
        window.location.replace("index.html");
    }
    e.preventDefault();
}

$("#add-activities").click(function (e){
    window.location.replace("find_activities.html");
    e.preventDefault();
});

$("#start-poll").click(function (e){
    window.location.replace("1a234b.html");
    e.preventDefault();
});


<!-- for voting in a poll -->
$("#submit_vote").click(function(e){
    if(creator){
        window.location.replace("results.html");
    }else {
        alert("VOTE SUBMITTED!");
        window.location.replace("index.html");
    }
    e.preventDefault();
});


<!-- for finding activities -->
$("#back_to_activities").click(function (e){
    window.location.replace("activity.html");
    e.preventDefault();
});

$("#refresh").click(function (e){
   alert("searching...");
});

$("#done-searching").click(function (e){
    window.location.replace("activity.html");

    e.preventDefault();
});

<!-- last page -->
$("#finish-poll").click(function (e){
    window.location.replace("index.html");
    e.preventDefault();
});