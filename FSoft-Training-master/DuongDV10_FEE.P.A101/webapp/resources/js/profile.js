$(document).ready(function() {
    $("#backto-edit").click(function () {
        $.ajax({
            url: "profile-back.html",
            success: function(response) {
                $(".col-sm-9").html(response);
            }
        });
    })
    $("#form-content-btn").click(function() {
        $.ajax({
            url: "loadding.html",
            success: function(response) {
                $(".col-sm-9").html(response);
            }
        });
        setTimeout(function () {
            $.ajax({
                url: "add-content.html",
                success: function(response) {
                    $(".col-sm-9").html(response);
                }
            });
        },5000)
    });
    $("#view-content-btn").click(function() {
        $.ajax({
            url: "loadding.html",
            success: function(response) {
                $(".col-sm-9").html(response);
            }
        });
        setTimeout(function () {
            $.ajax({
                url: "view-content.html",
                success: function(response) {
                    $(".col-sm-9").html(response);
                }
            });
        },5000)
    });
    $("#option-button").click(function () {
        $("#option-button").toggleClass("bg-light")
        $(".option").toggleClass("d-none")
    })
});

// var optionButton = document.getElementById("option-button")
// optionButton.addEventListener("click", function () {
//     this.classList.toggle("bg-light")
//     var x = document.getElementById("option");
//     x.classList.toggle("d-none")
// })

// var viewContent = document.getElementById("view-content-btn")
// viewContent.addEventListener("click", function () {
//     this.classList.toggle("bg-secondary")
//     var y = document.getElementById("edit-profile")
//     y.classList.toggle("d-none")
//     var load = document.getElementById("loading")
//     load.classList.toggle("d-none")
//     var timeout = setTimeout(function () {
//         var z = document.getElementById("view-content")
//         z.classList.toggle("d-none")
//         load.classList.toggle("d-none")
//     },5000)
// })

// var addContent = document.getElementById("form-content-btn")
// addContent.addEventListener("click", function () {
//     this.classList.toggle("bg-secondary")
//     var y = document.getElementById("edit-profile")
//     y.classList.toggle("d-none")
//     var load = document.getElementById("loading")
//     load.classList.toggle("d-none")
//     var timeout = setTimeout(function () {
//         var z = document.getElementById("add-content")
//         z.classList.toggle("d-none")
//         load.classList.toggle("d-none")
//     },5000)
// })


// // Processing Data
// const input = []
// // Variable
// const tableData = document.getElementById("table-data")
// const submitButton = document.getElementById("submit2") 
// const resetButton = document.getElementById("reset2")
// // add event listener
// submitButton.addEventListener("click", submitData);
// resetButton.addEventListener("click", resetData);
// // getData and submit
// input.push(
//     `<tr>
//         <td class="border p-1"><b>#</b></td>
//         <td class="border pl-2"><b>Title</b></td>
//         <td class="border pl-2"><b>Brief</b></td>
//         <td class="border pl-2"><b>Created Date</b></td>
//     </tr>    
//     <tr>
//         <td class="border p-1"><b>1</b></td>
//         <td class="border pl-2"><b></b></td>
//         <td class="border pl-2"><b>Brief</b></td>
//         <td class="border pl-2"><b>Created Date</b></td>
//     </tr>`    
// )
// tableData.innerHTML = input.join('')
// console.log(input)
// function submitData() {
//     var titleInput = document.getElementById("title").value
//     var briefInput = document.getElementById("brief").value
//     var contentInput = document.getElementById("content").value
//     var date = new Date()

//     input.push(
//         `<tr>
//             <td class="border p-1">${input.length}</td>
//             <td class="border p-1">${titleInput}</td>
//             <td class="border p-1">${briefInput}</td>
//             <td class="border p-1">${date}</td>
//         </tr>`    
//     )

//     // combine
//     tableData.innerHTML = input.join('')

//     // Reset after pushing data
//     var titleInput = document.getElementById("title").value = ""
//     var briefInput = document.getElementById("brief").value = ""
//     var contentInput = document.getElementById("content").value = ""
//     var date = new Date()


//     console.log(input)
// }
// function resetData() {
//     var titleInput = document.getElementById("title").value = ""
//     var briefInput = document.getElementById("brief").value = ""
//     var contentInput = document.getElementById("content").value = ""
//     var date = new Date()
// }




    


