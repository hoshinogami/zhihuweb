window.onload = function () {
    const load = document.querySelector("body > div > div.wr-load > div ");
    const input = document.querySelector("body > div > div.wr-load > div > input");
    const div = document.querySelector("body > div > div.wr-load > div");
    const button1 = document.querySelector("body > div > div.wr-load > div > button:nth-child(2)");
    const button2 = document.querySelector("body > div > div.wr-load > div > button:nth-child(3)");

    //添加图片
    input.addEventListener("change", e => {
        var file = e.target.files[0];
        if (!file.type.match('image/*')) {
            alert("Please select image file");
            return;
        }

        var reader = new FileReader();
        //读取文件
        reader.readAsDataURL(file);
        console.log(reader);
        reader.onload = function (e) {
            //��ֻ֤删除之前的图片
            var oldimg = load.querySelector("img");
            if (oldimg) {
                oldimg.parentNode.removeChild(oldimg);
            }
            //oldimg.remove();
            console.log(oldimg);
            console.log(e.target.result);
            var img = document.createElement("img");
            img.src = e.target.result;
            div.appendChild(img);
            load.innerHTML = ""
            button1.innerText = "更改"
            button2.innerText = "删除"
            // div.remove()
        }

    })
    load.addEventListener('click', () => {
        input.click();
    });
    //更改图片
    button1.addEventListener("click", (e) => {
        input.click();
        //��֯阻止冒泡
        e.stopPropagation();
    })
    //删除图片
    button2.addEventListener("click", (e) => {
        var oldimg = load.querySelector("img");
        if (oldimg) {
            oldimg.parentNode.removeChild(oldimg);
        }
        button1.innerText = ""
        button2.innerHTML = ""
        load.innerHTML = "添加图片"
        e.stopPropagation();
    })
}