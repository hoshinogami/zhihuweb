window.onload = function () {
    // ’≤ÿ
    var store = document.querySelectorAll("#root > div > div.main > div.main-content > div > div.page-tabs > div.store");
    var modal = document.querySelector("#modal");
    var close = document.querySelector("#modal>.close");
    //µ«¬º
    var user_head = document.querySelector("#root > header > div > div.user > div.user-head");
    console.log(user_head);
    var user_tab = document.querySelector("body > div.user-tab");
    console.log(user_tab);
    let flag = 1;
    //console.log(store);
    // ’≤ÿ
    for (var i = 0; i < store.length; i++) {
        store[i].addEventListener("click", function () {
            modal.style.display = "block";
        })
    }
    close.addEventListener("click", function () {
        modal.style.display = "none";
    })
    //µ«¬º
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

}