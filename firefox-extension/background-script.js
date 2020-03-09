browser.menus.create({
    id: "text-selection-loader",
    title: "Suggest edit",
    contexts: ["selection"]
});

browser.menus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
        case "text-selection-loader":
            browser.tabs.query({active: true, currentWindow: true}, tabs => {
                browser.tabs.sendMessage(tabs[0].id, {type: "selection", selectedText: info.selectionText});
            });
            break;
    }
});