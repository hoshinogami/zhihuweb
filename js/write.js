window.onload = function () {
    const load = document.querySelector("body > div > div.wr-load > div > button");
    const input = document.querySelector("body > div > div.wr-load > div > input");
    input.addEventListener("change", e => {
        const fileList = e.target.files;
        [].slice.call(fileList).forEach(file => {
            console.log(file);
        });
    })
    load.addEventListener('click', () => {
        inpu.click();
    });
}