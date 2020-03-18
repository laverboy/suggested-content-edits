let code;
let form;
let wrapper;

document.addEventListener('DOMContentLoaded', function () {
    code = document.getElementById('code');
    form = document.getElementById('form');
    wrapper = document.getElementById('wrapper');

    let data = {};

    browser.storage.local.get(stored => {
        code.value = data.originalText = stored.content;
        data.site = stored.site;
        data.pageID = stored.pageID;

        if (code.value.length !== 0) {
            wrapper.classList.remove("start");
            wrapper.classList.add("selectionMade");
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        data.editedText = e.target.children.code.value;
        data.timestamp = Date.now();

        fetch("https://kg4bf2ru4b.execute-api.eu-west-2.amazonaws.com/test/edits", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                showSuccess();
            })
            .catch((error) => {
                console.error('Error:', error);
                showError();
            });


    })
}, false);

function showSuccess() {
    wrapper.classList.remove("selectionMade");
    wrapper.classList.add("submitSuccess");
}

function showError() {
    wrapper.classList.remove("selectionMade");
    wrapper.classList.add("submitError");
}