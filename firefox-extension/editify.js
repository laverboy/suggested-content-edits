document.body.style.border = "5px solid red";

browser.runtime.onMessage.addListener(request => {
    if (request.type === 'selection') {
        console.log("selection occurred");
        const modal = document.createElement('dialog');
        modal.setAttribute("style", "height:40%");
        modal.innerHTML =
            `<iframe id="headlineFetcher" style="height:100%"></iframe>
        <div style="position:absolute; top:0px; left:5px;">  
            <button>x</button>
        </div>`;
        document.body.appendChild(modal);
        const dialog = document.querySelector("dialog");
        console.log("dialog", dialog);
        dialog.showModal();

        const iframe = document.getElementById("headlineFetcher");
        iframe.src = browser.extension.getURL("index.html");
        iframe.frameBorder = 0;

        dialog.querySelector("button").addEventListener("click", () => {
            dialog.close();
        });
    }
});