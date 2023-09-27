function viewCart(id) {
    var listCart = localStorage.getItem('listCart');
    console.log(listCart);
    const newCart = {
        id: id,
        quantity: 1
    };
    if (listCart == '' || listCart == null || listCart.length == 0) {

        listCart = [newCart];
    } else {
        listCart = JSON.parse(listCart);
        // listCart.push( productData );
        const filterCart = listCart.filter(item => item.id == id);
        if (filterCart.length == 0) {
            listCart.push(newCart)
        } else {
            listCart = listCart.map(item => {
                if (item.id == id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
        }
    }
    localStorage.setItem('listCart', JSON.stringify(listCart));

    let page_cart = window.location.protocol + '//' + window.location.host + '/html/cart.html';
    location.href = page_cart;
}

function detailProduct(id) {
    let page_product_detail = window.location.protocol + '//' + window.location.host + '/html/product-detail.html';
    let params = {
        id: id
    }
    location.href = `${ page_product_detail }?id=${ params.id }`;
}

function displayProduct(listProduct) {
    let boxProduct = '';
    listProduct.forEach(element => {
        let row = `
            <div class="box-info position-relative p-3">
                <div class="box-title">${ element.title }</div>
                <div class="box-img"><img src="${ element.img }" alt=""></div>
                <div class="box-description">${ element.description }</div>
                <div class="box-price">${ element.price } USD</div>
                <div class="box-quantity">${ element.quantity } unit in stock</div>
                <div class="box-button">
                    <button class="button-detail" id="btnDetail" onclick="detailProduct(${ element.id })"><i class="fa-solid fa-circle-info"></i>Details</button>
                    <button class="button-order" id="btnOrder" onclick="viewCart(${ element.id })"><i class="fa-sharp fa-solid fa-cart-shopping me-2"></i>Order Now</button>
                </div>
            </div>
        `;
        boxProduct += row;

    });
    var box = document.getElementById('boxProducts');
    box.innerHTML = boxProduct;
}

let listProduct = localStorage.getItem('listProduct');
listProduct = JSON.parse(listProduct);
displayProduct(listProduct);