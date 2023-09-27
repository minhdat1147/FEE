$(document).ready(function() {
    $("#addEmpLink").click(function() {
        $.get({
            url: "add-employee.html",
            success: function(response) {
                $(".container").html(response);
                $("#employeeName").focus();
            }
        });
    });

    $("#listEmpsLink").click(function() {
        $.get({
            url: "list-employees.html",
            success: function(response) {
                $(".container").html(response);
            }
        });
    });

});