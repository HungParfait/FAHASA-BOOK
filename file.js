let coVN = document.getElementById('co-VN');
let coAnh = document.getElementById("co-Anh");
let tiengAnh = document.getElementById('tieng-Anh');
let tiengViet = document.getElementById('tieng-Viet');
console.log(tiengAnh);
tiengAnh.addEventListener('click', function () {
    coAnh.style.display = "inline";
    coVN.style.display = 'none';
    console.log('hhh');
})

tiengViet.addEventListener('click', function () {
    coAnh.style.display = "none";
    coVN.style.display = 'inline';
    console.log('hhh123');
})


function cancelFunc() {
    let login = document.getElementById("login-area");
    login.style.display = 'none';
}

let login = document.getElementById("log-in");
login.addEventListener('click', function () {
    let login1 = document.getElementById("login-area");
    login1.style.display = 'block';
})

let daXem = document.getElementById('da-xem');
daXem.addEventListener('click', function () {
    let spDaXem = document.getElementById('sp-da-xem');
    if (daXem.style.right == '0px') {
        console.log("zz")
        spDaXem.style.display = 'block';
        daXem.style.right = '400px';
    } 
    else if (daXem.style.right == '400px') {
        console.log("zz")
        spDaXem.style.display = 'none';
        daXem.style.right = '0px';
    }
}
)

