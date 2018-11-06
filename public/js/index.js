var loggedIn = false;
var creator = true;
var accounts =  {'bob':'password'};

var activities = [];

<!-- logging in with account -->
$("#login-btn").click(login);
function login(e){
    var id = $("#userID").val();
    var pwd = $("#userPassword").val();

    if(pwd === accounts[id]) {
        creator = true;
        loggedIn = true;

    }else {
        alert("account not found");
    }
    e.preventDefault();
}

<!-- for joining an existing poll. -->
var pollCode = "1a234b";
$("#join-btn").click(join);
function join(e){
    var code = prompt("Please enter poll code");
    if(code == null || code === ""){
    }else{
        $.post('/join-poll', String(code), function(){
            console.log("callback from join button");
        });
    }
    e.preventDefault();
}

$(document).delegate("#done-signup", "click",function(e){
    var newID = $("#newID").val();
    var newPWD = $("#newPassword").val();
    alert("Account created: " + newID + "\t" + newPWD);

    accounts[newID] = newPWD;
    e.preventDefault();
});