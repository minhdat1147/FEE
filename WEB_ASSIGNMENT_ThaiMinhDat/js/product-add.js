$("#formSubmit").on("submit", (event) => {
    event.preventDefault();
    let productData = {};
    const formDataArr = $('#formSubmit').serializeArray();
    formDataArr.map(obj => {
        productData = {
            ...productData,
            [obj.name]: obj.value
        }
    });
    // console.log(productData);

    const inputImg = $('#formSubmit #fileProductImage')[0].files[0];
    // check condition
    let listKey = Object.keys(productData);
    let listKeyFilter = listKey.filter(ele => ele == 'condition');
    if (listKeyFilter.length < 1) {
        return;
    }
    if (inputImg == undefined) {
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(inputImg);
    // 
    reader.addEventListener('load', () => {
        // productData = {
        //     ...productData,
        //     img: reader.result
        // }
        let listStore = localStorage.getItem('listProduct');
        listStore = JSON.parse(listStore);
        productData = {
            ...productData,
            id: listStore.length + 1,
            img: reader.result
        }
        if (listStore == null || listStore.length == 0) {

            listStore = [productData];
        } else {
            listStore.push(productData);
        }
        localStorage.setItem('listProduct', JSON.stringify(listStore));
    });
})

function addProduct(e) {
    e.preventDefault();
    var formsubmit = document.getElementById('formSubmit');
}