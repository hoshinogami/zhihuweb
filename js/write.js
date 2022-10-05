window.onload = function () {
    const load = document.querySelector("body > div > div.wr-load > div > button");
    const input = document.querySelector("body > div > div.wr-load > div > input");
    const div = document.querySelector("body > div > div.wr-load > div");
    input.addEventListener("change", e => {
        var file = e.target.files[0];
        if (!file.type.match('image/*')) {
            alert("Please select image file");
            return;
        }

        var reader = new FileReader();

        reader.readAsDataURL(file);
        console.log(reader);
        reader.onload = function (e) {
            console.log(e.target.result);
            var img = document.createElement("img");
            img.src = e.target.result;
            div.appendChild(img);
            // div.remove()
        }

    })
    load.addEventListener('click', () => {
        input.click();
    });
}