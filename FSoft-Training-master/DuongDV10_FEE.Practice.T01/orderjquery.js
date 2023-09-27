$(document).ready(function () {
    var listData = [
        {
            product: "./Ảnh/anh1.jpg",
            decription: "MASSA AST"+"\n Color: Black, Material: Metal",
            quantity: 1,
            price: 120.00,
            discount: 25.00,
            tax : function () {
                return this.quantity*this.price*0.125
            },
            total: function () {
                return this.quantity*this.price+- this.discount+this.tax()
            }
        },
        {
            product: "./Ảnh/anh1.jpg",
            decription: "MASSA AST \n Color: Black, Material: Metal",
            quantity: 1,
            price: 7.00,
            discount: 0.00,
            tax : function () {
                return this.quantity*this.price*0.125
            },
            total: function () {
                return this.quantity*this.price- this.discount+this.tax()
            }
        },
        {
            product: "./Ảnh/anh1.jpg",
            decription: "MASSA AST \n Color: Black, Material: Metal",
            quantity: 1,
            price: 120.00,
            discount: 25.00,
            tax : function () {
                return this.quantity*this.price*0.125
            },
            total: function () {
                return this.quantity * this.price - this.discount + this.tax()
            }
        },
    ];
    const MyData = listData;
    const output = [];  
    function printData() {
        for (let i = 0; i < MyData.length; i++) {
            output.push(
                `
                <tr id="col${i}" class="text-center p-2 border"> 
                        <td><img height="50px" src="${MyData[i].product}" alt="Anh minh hoa"></td>
                        <td>${MyData[i].decription}</td>
                        <td><div class="btn border" id="numQuantity${i}">${MyData[i].quantity}</div>
                            <div onclick="increaseQuantity(${i})" id="add${i}" class="btn btn-none border"><i class="fas fa-plus"></i></div>
                            <div onclick="decreaseQuantity(${i})" id="sub${i}" class="btn btn-none border"><i class="fas fa-minus"></i></div>
                            <div onclick="removeQuantity(${i})" id="remove${i}" class="btn btn-none btn-danger border"><i class="fas fa-times"></i></div>
                        </td>
                        <td>$${MyData[i].price}</td>
                        <td>$${MyData[i].discount}</td>
                        <td id="tax${i}">$
                            ${MyData[i].tax()}
                        </td>
                        <td id="total${i}">$${MyData[i].total()}</td>
                    </tr> 
                `
            )
            
        }
        var totalOverall = 0;
        var discountOverall = 0
        var totalTax = 0
        for (let i = 0; i < MyData.length; i++) {
            totalOverall += MyData[i].total()
            discountOverall += MyData[i].discount
            totalTax += MyData[i].tax()    
        }
        output.push (
            `
            <tr class="p-2 border">
                <td colspan="6" class="text-right">Total Price: </td>
                <td id="totalall">$${totalOverall
                }</td>
            </tr>
            <tr class=" p-2 border">
                <td colspan="6" class="text-right">Total Discount: </td>
                <td td="discountall">$${discountOverall
                }</td>
            </tr>
            <tr class="p-2 border">
                <td colspan="6" class="text-right">Total Tax: </td>
                <td id="taxall">$${totalTax
                }</td>
            </tr>
            `
        )
        columnData.innerHTML = output.join('')
    } 
    printData();
    for (let i = 0; i < MyData.length; i++) {
        $("#add"+i).click(function increaseQuantity(count) {
            
            var total = 0;
            var total2 = 0;
            var tax = 0;
            var tax2 = 0;
            var updatett = document.getElementById("totalall");
            var updatet = document.getElementById("taxall")
            for (let i = 0; i < MyData.length; i++) {
                if (count == i) {
                    MyData[i].quantity +=1
                    total = MyData[i].quantity * MyData[i].price - MyData[i].discount + MyData[i].quantity*MyData[i].price*0.125
                    tax = MyData[i].quantity*MyData[i].price*0.125
                    var quantityValue = document.getElementById("numQuantity"+count)
                    quantityValue.innerHTML = `<span>${MyData[i].quantity}</span>`
        
                    var updateTax = document.getElementById("tax"+i)
                    updateTax.innerHTML = `<span>$${tax}</span>`
        
                    var updateTotal = document.getElementById("total"+i)
                    updateTotal.innerHTML =
                    `<span>$
                        ${total}
                    </span>`
                }
            }
            for (let i = 0; i < MyData.length; i++) {
                total2  += MyData[i].quantity * MyData[i].price - MyData[i].discount + MyData[i].quantity*MyData[i].price*0.125
                tax2 += MyData[i].quantity*MyData[i].price*0.125
            }
            updatett.innerHTML = `<span>$${total2}</span>`
            $("#totalall").append(updatett)
            updatet
        })
        $("#sub"+i).click(function decreaseQuantity(count) {
            var total = 0;
            var total2 = 0;
            var tax = 0;
            var tax2 = 0;
            var updatett = document.getElementById("totalall");
            var updatet = document.getElementById("taxall")
            for (let i = 0; i < MyData.length; i++) {
                if (count == i) {
                    MyData[i].quantity -=1
                    total = MyData[i].quantity * MyData[i].price - MyData[i].discount + MyData[i].quantity*MyData[i].price*0.125
                    tax = MyData[i].quantity*MyData[i].price*0.125
                    var quantityValue = document.getElementById("numQuantity"+count)
                    quantityValue.innerHTML = `<span>${MyData[i].quantity}</span>`
        
                    var updateTax = document.getElementById("tax"+i)
                    updateTax.innerHTML = `<span>$${MyData[i].quantity*MyData[i].price*0.125}</span>`
        
                    var updateTotal = document.getElementById("total"+i)
                    updateTotal.innerHTML =
                    `<span>$
                        ${MyData[i].quantity * MyData[i].price - MyData[i].discount + MyData[i].quantity*MyData[i].price*0.125}
                    </span>`
                }
            }
            for (let i = 0; i < MyData.length; i++) {
                total2  += MyData[i].quantity * MyData[i].price - MyData[i].discount + MyData[i].quantity*MyData[i].price*0.125
                tax2 += MyData[i].quantity*MyData[i].price*0.125
            }
            updatett.innerHTML = `<span>$${total2}</span>`
            updatet.innerHTML = `<span>$${tax2}</span>`
        })
        $("#remove").click(function removeQuantity(count) {
            for (let i = 0; i < MyData.length; i++) {
                if (count == i) {
                    var remove = document.getElementById("col"+i)
                    remove.classList.add("d-none")
                }
                
            }
        })
    }
})

console.log(listData)
