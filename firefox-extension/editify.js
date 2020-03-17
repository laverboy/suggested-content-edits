document.body.style.border = "5px solid red";

document.onmouseup = document.onkeyup = document.onselectionchange = function() {
    let content = window.getSelection().toString();
    browser.storage.local.set({ content });
};