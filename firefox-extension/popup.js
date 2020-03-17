document.addEventListener('DOMContentLoaded', function() {
    let code = document.getElementById('code');
    let form = document.getElementById('form');
    let wrapper = document.getElementById('wrapper');

    browser.storage.local.get(stored => {
        code.value = stored.content;
        if (code.value.length !== 0) {
            wrapper.classList.add("selectionMade")
        }
    });

    form.addEventListener('submit', function(e){
        e.preventDefault();
        let value = e.target.children.code.value;
        console.log(value)
    })
}, false);