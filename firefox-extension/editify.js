document.onmouseup = document.onkeyup = document.onselectionchange = function () {
    let content = window.getSelection().toString();
    browser.storage.local.set({
        content: content,
        site: document.location.host,
        pageID: document.location.pathname
    });
};