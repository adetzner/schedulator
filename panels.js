$.fn.showPanel = function(panel){
    let frame = $(this);
    frame.children().hide();
    frame.append(panel);
    panel.show();
}

Schedule.prototype.loadSettingsPanel = function(){
    let schedule = this;
    let settings = this.settingsPanel;
    let table = $(document.createElement("table"));
    table.attr("class", "settings schedule");

    table.append("<tbody><tr><td>Special Name</td><td>Specialist</td><td>Abbreviation</td><td>Color</td></tr></tbody>");

// Add an input box for the 

    for (let i = 1; i < schedule.specials.length; i++){
        let special = schedule.specials[i];
        table.find("tbody").append("<tr>")
             .append('<td><input type=\'text\' class=\'teacher_name\' value="' + special.name + '"></input></td>' +
                     "<td>" + special.specialist + "</td>" +
                     "<td>" + special.abbr + "</td>" +
                     "<td>" + schedule.palette[special.color[0]] + "</td>")
             .append("</tr>");

    }
    
    settings.append(table);

    let settingsButton = $(document.createElement("button"));
    settingsButton.attr("class", "menu").append("*").css("color", "#fff");

    $("#rightbar").append(settingsButton);

    settingsButton.on("click", function(){
        $("#right").showPanel(schedule
            .settingsPanel);
    });

}