const curlink = window.location.href;
const id = curlink.split(`?`)[1].split(`=`)[1];

function getProduct(id) {
    if (id == undefined) {
        return;
    }
    return listProduct.filter(item => item.id == id)[0];
}

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

function detail(id) {
    const product = getProduct(id);
    if (product == undefined) {
        return;
    }
    var data = `
            <div class="box-img">
                // <img src="${product.img}" alt="iphone-x">
            </div>
            <div class="box-info">
                <div class="box-title">${product.title}</div>
                <div class="box-about">${product.description}</div>
                <div class="box-item-code"><span class="info-name">Item Code : </span><span class="item-code-value">1526440382825</span></div>
                <div class="box-manufacturer"><span class="info-name">manufacturer </span>: Apple</div>
                <div class="box-category"><span class="info-name">category </span>: <span class="category-value">apple</span></div>
                <div class="box-unit-stock"><span class="info-name">Availble units in stock </span>: ${product.quantity}</div>
                <div class="box-price">${product.price}USD</div>
                <div class="box-button">
                    <a href=/html/index.html><button type="button" class="button-back"><i class="fa-solid fa-circle-arrow-left me-2"></i>back</button></a>
                    <button type="button" class="button-order"  id="btnOrder"><i class="fa-sharp fa-solid fa-cart-shopping me-2"></i>Order Now</button>

                </div>
            </div>
        `;
    const productInfo = document.getElementById('info-product');
    productInfo.innerHTML = data;
}
let listProduct = localStorage.getItem('listProduct');
listProduct = JSON.parse(listProduct);
detail(id);