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
$("#join-btn").click(function join(e){
    const code = prompt("Please enter poll code");
    if(code == null || code === ""){
    }else{
        $.ajax({
            url:  "/join-poll",
            type: "POST",
            data: {'code': code},
            success: function(data){
                if(data.error) {
                    console.log("boi");
                    alert("Poll NOT Found!")
                }else {
                    window.location.replace(data);
                }
            }
        });
    }
});

$("#guest-btn").click(function (e){
   window.location.replace("activity.html");
   e.preventDefault();
});

$(document).delegate("#done-signup", "click",function(e){
    var newID = $("#newID").val();
    var newPWD = $("#newPassword").val();
    alert("Account created: " + newID + "\t" + newPWD);

    accounts[newID] = newPWD;
    e.preventDefault();
});