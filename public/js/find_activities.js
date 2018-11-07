const activities = ["Bowling", "Movies", "Mall", "Ice Skating", "Batting Cage",
    "Pumpkin Patch", "Park", "Go Kart", "Paint Ball", "Yoga", "Pilates", "Obstacles",
    "Ski"];


$("#refresh").click(function (e){
    $("#nearby-activities").empty();
    var radius = $("#radius").val();
    let nearby = get_activities_within(radius);

    //console.log(nearby);
    for(let i = 0; i < nearby.length; i++){
        let embedded_html = make_checkbox(nearby[i], i);
        $("#nearby-activities").append(embedded_html);
    }
});

/**
 * Get list of activities that are within the given radius.
 * Going to use dummy array for now, will integrate with Google maps to search later
 * @param int radius to search within
 */
function get_activities_within(radius){
    if(radius > activities.length)  return activities;
    return activities.slice(0, radius);
}

/**
 * make embeddable html from activity (checkbox)
 * @param activity - name of activity to make a checkbox from
 * @param index - what ID should this activity have?
 */
function make_checkbox(activity, index){
    return "<input class=form-check-input type=checkbox value='' id=input" + index + ">\
    <label class='form-check-label' for='input'" + index + ">"  + activity + "</label><br>";
}