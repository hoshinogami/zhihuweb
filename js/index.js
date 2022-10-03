window.onload = function () {
    //收藏
    var store = document.querySelectorAll("#root > div > div.main > div.main-content > div > div.page-tabs > div.store");
    var modal = document.querySelector("#modal");
    var close = document.querySelector("#modal>.close");
    //登录
    var user_head = document.querySelector("#root > header > div > div.user > div.user-head");
    //console.log(user_head);
    var user_tab = document.querySelector("body > div.user-tab");
    //console.log(user_tab);
    let flag = 1;
    //导航栏
    var tab2 = document.querySelector("body > header");
    var tab1 = document.querySelector("#root > header");
    var content_tab = document.querySelector("#root > div > div.main > div.main-tabs");
    console.log(tab1);
    console.log(tab2);
    //收藏
    for (var i = 0; i < store.length; i++) {
        store[i].addEventListener("click", function () {
            modal.style.display = "block";
        })
    }
    close.addEventListener("click", function () {
        modal.style.display = "none";
    })
    //登录
    user_head.addEventListener("click", function () {

        if (flag == 1) {
            user_tab.style.display = "block";
            flag = 0;
            return;
        }
        if (flag == 0) {
            user_tab.style.display = "none";
            flag = 1;
            return;
        }
    })
    //导航栏
    window.addEventListener("scroll", function () {
        console.log("1");
        var scrolltop = document.body.scrollTop || window.pageYOffset;
        console.log(scrolltop);
        var tab_height = 51;

        var contab_bottom = content_tab.offsetHeight + content_tab.offsetTop;
        if (scrolltop + tab_height > contab_bottom) {
            tab1.style.display = "none";
            tab2.style.display = "block";

        }
        else {
            tab1.style.display = "block";
            tab2.style.display = "none";
        }
        console.log(contab_bottom);
    })
}