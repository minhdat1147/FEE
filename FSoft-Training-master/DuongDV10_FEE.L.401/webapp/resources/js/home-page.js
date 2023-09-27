$(document).ready(function() {
    $(".fa.fa-home").click(function() {
        $.ajax({
            url:"home-page.html"
        })
    })
    $("#addEmpLink").click(function() {
        $.get({
            url: "../views/add-employee.html",
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