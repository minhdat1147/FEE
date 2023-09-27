const accounts = [{
        username: 'dat',
        password: 'dat123456',
        admin: true
    },
    {
        username: 'dat2',
        password: 'dat123456',
        admin: false
    },
    {
        username: 'dat3',
        password: 'dat123456',
        admin: false
    },
];


function checkLogin(e) {
    e.preventDefault();
    var user_name = document.getElementById('txtUserName').value;
    var pass = document.getElementById('txtPassword').value;
    if (user_name == '') {
        alert('Please enter user name!');
        return;
    }
    if (user_name.length > 0 && user_name.length < 3) {
        alert('Please enter user name at least 3 characters!');
        return;
    }

    if (pass == '') {
        alert('Please enter password!');
        return;
    }
    if (pass.length < 8) {
        alert('Please enter password at least 8 characters!');
        return;
    }
    const a = accounts.filter(acc => acc.username == user_name && acc.password == pass)[0];
    if (a.admin == false) {
        let page_index = window.location.protocol + '//' + window.location.host + '/html/index.html';

        location.href = page_index;
    } else {
        let page_products_add = window.location.protocol + '//' + window.location.host + '/html/product-add.html';
        location.href = page_products_add;
    }
}

function loadData() {
    let listStore = localStorage.getItem('listProduct');
    if (listStore != '') {
        listStore = JSON.parse(listStore);
    }
    if (listStore != null && listStore.length != 0) {
        localStorage.setItem('listProduct', JSON.stringify([]));
    }
    localStorage.setItem('listProduct', JSON.stringify(listProduct))
}

loadData()