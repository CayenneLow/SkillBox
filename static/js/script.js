document.addEventListener("DOMContentLoaded", function(event) {
    var numJobs = 1;
    let cloneStatic = $("#job-card-1").clone();

    function addJobBox() {
        let clone = cloneStatic.clone();
        numJobs++;
        $("#job-list").append(clone);
        //clone.appendTo($("#job-list"));
        clone.prop("id", `job-card-${numJobs}`);
        var jobCardId = "#job-card-" + numJobs;
        $("#job-card-" + numJobs + ' #role').attr("name", numJobs + "-role");
        $("#job-card-" + numJobs + ' #description').attr("name", numJobs + "-description");
        $("#job-card-" + numJobs + ' #budget-min').attr("name", numJobs + "-budget-min");
        $("#job-card-" + numJobs + ' #budget-max').attr("name", numJobs + "-budget-max");
        $("#job-card-" + numJobs + ' #1-select-skills').prop("id", numJobs + "-select-skills");
        console.log("#job-card-" + numJobs + " #" + numJobs + "-select-skills");
        $("#job-card-" + numJobs + " #" + numJobs + "-select-skills").select2({width:'style'});
        $("#job-card-" + numJobs + " #" + numJobs + "-select-skills").change(dropDown);
    }
    
    $("#new-job-button").on('click', addJobBox);

    $("#" + numJobs + "-select-skills").select2();

    $("#" + numJobs + "-select-skills").on('change', dropDown);

    function dropDown() {
        var skill = $("#" + numJobs + "-select-skills option:selected").text();
        console.log(skill);
        if (skill == "Select Skill"){
            return;
        }
        var alreadyThere = 0;
        $('#skill-results').children('li').each(function () {
            if (skill == this.innerText) {
                alreadyThere = 1;
            }
        });
        if (alreadyThere) {
            return;
        }

        skillElement = document.createElement("li")
        skillElement.className = "badge badge-warning list-inline-item"
        skillElement.innerText = skill;
        $("#skill-results").append(skillElement);
    }
});
