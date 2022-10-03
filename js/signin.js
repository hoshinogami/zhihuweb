window.onload = function () {
    var change = document.querySelectorAll("body > div > div.sign > div.write > div.wr-item1 > div.wr-item11");
    console.log(change);
    var item21 = document.querySelector("body > div > div.sign > div.write > div.wr-item21");
    var item22 = document.querySelector("body > div > div.sign > div.write > div.wr-item22");
    var item31 = document.querySelector("body > div > div.sign > div.write > div.wr-item31");
    var item32 = document.querySelector("body > div > div.sign > div.write > div.wr-item32");
    for (var i = 0; i < change.length; i++) {
        change[i].index = i;
        change[i].addEventListener("click", function () {
            for (var j = 0; j < change.length; j++) {
                change[j].classList.remove("current");
                item21.style.display = "none";
                item22.style.display = "none";
                item31.style.display = "none";
                item32.style.display = "none";
            }
            this.classList.add("current");
            if (this.index == 0) {
                item21.style.display = "block";
                item31.style.display = "block";
                return;
            }
            else {
                item22.style.display = "block";
                item32.style.display = "block";
            }

        })
    }

}