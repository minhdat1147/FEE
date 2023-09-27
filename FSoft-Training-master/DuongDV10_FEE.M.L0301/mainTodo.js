
var arrData = [] // Array Of Data

// Using enter to push
var input = document.getElementById("input-todo");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
  }
});

function AddtodoList() {
    var input = document.getElementById("input-todo").value
    if (input !== "") {
        arrData.push(input) // push data to array

        // khung html của list
        var list = `<div class="col-lg-4">
                        <div id="${input}" class="list-button">
                            <div class="col-sm-10 text-left" onclick="Complete(${arrData.indexOf(input)})">
                                <span id="${arrData.indexOf(input)}">${input}</span>
                            </div>
                            <div class="col-sm-1" onclick="Remove(${arrData.indexOf(input)})">
                                <a class="text-dark"><i class="fas fa-times fax2"></i></a>
                            </div>
                        </div>
                    </div>`;
    
        var addElement = document.createElement('div');

        addElement.setAttribute("class","d-flex justify-content-center")

        addElement.innerHTML = list;
        var x = document.getElementById("todo-list")
        x.appendChild(addElement)  
        
        // clear trường input sau khi thêm dữ liệu thành công
        var clearInputField = document.getElementById("input-todo").value = "";
    }
    console.log(arrData)
}

function Complete(y) {
    for (let i = 0; i < arrData.length; i++) {
        if ( y === i) {             
            var x = document.getElementById(i).innerHTML=`${arrData[y]}( completed )`
            var listButtonn = document.getElementById(arrData[i])
            listButtonn.classList.toggle("list-button")
            listButtonn.classList.toggle("completed")
            console.log("complete")     
        }
    }
}

function Remove(x) {
    console.log(x)
    for(let i = 0;i < arrData.length; i++) {
        if(x===i) {
            var remove = document.getElementById(arrData[x])
            remove.classList.add("d-none")
            if (arrData.length === 1 ) {
                remove.splice(0,1)
            } else {
                arrData.splice(x,1)
            }
            console.log("continue")
        }
    }
    console.log(arrData)
}