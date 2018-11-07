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
    let code = Math.random().toString(36).substring(7);
    $.ajax({
        url:  "/create-poll",
        type: "POST",
        data: {'code': code},
        success: function(data){
            if(data.error) {
                console.log("boi");
            }else {
                console.log(data);
                window.location.replace(data);
            }
        }
    });
});
