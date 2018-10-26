var sampleID = "bob";
var samplePwd = "password";

$("#login-btn").click(login);
function login(e){
    var id = $("#userID").val();
    var pwd = $("#userPassword").val();

    if(id == sampleID && pwd == samplePwd)
        window.location.replace("activity.html");
    else
        alert("account not found");
    e.preventDefault();
}

$("#join-btn").click(join);
function join(e){

    e.preventDefault();
}

$("#guest-btn").click(guest);
function guest(e){
    window.location.replace("activity.html");
    e.preventDefault();
}