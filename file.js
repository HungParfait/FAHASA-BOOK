{
let coVN = document.getElementById('co-VN');
let coAnh = document.getElementById("co-Anh");
let tiengAnh = document.getElementById('tieng-Anh');
let tiengViet = document.getElementById('tieng-Viet');
tiengAnh.addEventListener('click', function () {
    coAnh.style.display = "inline";
    coVN.style.display = 'none';
})

tiengViet.addEventListener('click', function () {
    coAnh.style.display = "none";
    coVN.style.display = 'inline';
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
        spDaXem.style.display = 'block';
        daXem.style.right = '400px';
    }
    else if (daXem.style.right == '400px') {
        spDaXem.style.display = 'none';
        daXem.style.right = '0px';
    }
}
)
}
{
let ranking = document.getElementById('ranking-table');
let ele = ranking.getElementsByClassName('list-group-item');
let content;

for (let i = 0; i < ele.length; i++) {
    ele[i].onmouseover = function () {
        content = this;
    }
}

ranking.addEventListener('mouseover', function () {
    for (let i = 0; i < ele.length; i++) {
        let target = document.getElementById(ele[i].href.replace(window.location.href + '#', ''));
        target.classList.remove('show');
        target.classList.remove('active');
    }
    
    let dich = document.getElementById(content.href.replace(window.location.href + '#', ''));
    console.log(dich);
    dich.classList.add('show');
    dich.classList.add('active');

})
}