function loadList(listProduct) {
    let listCart = localStorage.getItem('listCart');
    listProduct = JSON.parse(listProduct);
    listCart = JSON.parse(listCart);
    let rowProduct = '';
    listProduct.forEach(element => {
        listCart.forEach(el => {
            if (element.id == el.id) {
                let row = `
                <div class="row title-list">
                    <div class="title-product col-4">${element.title}</div>
                    <div class="title-quantity col-2">${el.quantity}</div>
                    <div class="title-unit-price col-2">${element.quantity}</div>
                    <div class="title-price col-2">${element.price}</div>
                    <div class="title-action col-2"><button class="button-remove">remove</button></div>
                </div>
                `;
                rowProduct += row;
            }
        });
    });
    let rowData = document.getElementById('data-row');
    rowData.innerHTML = rowProduct
}

let listProduct = localStorage.getItem('listProduct');

loadList(listProduct);