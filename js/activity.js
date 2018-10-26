$("#add-activities").click(findActivities);

function findActivities(e){
    alert("looking for activites");
}

$("#back").click(backToHome);
function backToHome(e){
    window.location.replace("index.html");
    e.preventDefault();
}