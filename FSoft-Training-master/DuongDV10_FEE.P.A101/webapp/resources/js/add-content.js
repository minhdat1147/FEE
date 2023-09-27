// Processing Data
console.log("hihi")
const input = []
// Variable
const tableData = document.getElementById("table-data")
const submitButton = document.getElementById("submit2") 
const resetButton = document.getElementById("reset2")
// add event listener
submitButton.addEventListener("click", submitData);
resetButton.addEventListener("click", resetData);
// getData and submit
console.log("2")
input.push(
    `<tr>
        <td class="border p-1"><b>#</b></td>
        <td class="border pl-2"><b>Title</b></td>
        <td class="border pl-2"><b>Brief</b></td>
        <td class="border pl-2"><b>Created Date</b></td>
    </tr>    
    <tr>
        <td class="border p-1"><b>1</b></td>
        <td class="border pl-2"><b>Developper</b></td>
        <td class="border pl-2"><b>Brief</b></td>
        <td class="border pl-2"><b>Created Date</b></td>
    </tr>`    
).join('')
console.log("3")
console.log(input)
tableData.innerHTML = input

function submitData() {
    var titleInput = document.getElementById("title").value
    var briefInput = document.getElementById("brief").value
    var contentInput = document.getElementById("content").value
    var date = new Date()

    input.push(
        `<tr>
            <td class="border p-1">${input.length}</td>
            <td class="border p-1">${titleInput}</td>
            <td class="border p-1">${briefInput}</td>
            <td class="border p-1">${date}</td>
        </tr>`    
    )

    // combine
    tableData.innerHTML = input.join('')

    // Reset after pushing data
    var titleInput = document.getElementById("title").value = ""
    var briefInput = document.getElementById("brief").value = ""
    var contentInput = document.getElementById("content").value = ""
    var date = new Date()


    console.log(input)
}
function resetData() {
    var titleInput = document.getElementById("title").value = ""
    var briefInput = document.getElementById("brief").value = ""
    var contentInput = document.getElementById("content").value = ""
    var date = new Date()
}