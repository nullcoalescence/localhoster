// on load
document.addEventListener("DOMContentLoaded", function() {

    // Go button
    document.getElementById("go").addEventListener("click", function() {
        var port = document.getElementById("port-field").value;
        if (port == "" || port == null || port == undefined) {
            chrome.tabs.create({ url: "http://localhost" });
        } else {
            chrome.tabs.create({ url: "http://localhost:" + port });
        }
    });


    // Other button clicks
    // Help button - opens the page on my site explaining how to use this extension (https://ben.bike/code/localhoster/help)
    document.getElementById("help").addEventListener("click", function() {
        chrome.tabs.create({ url: "https://ben.bike/code/localhoster/help" });
    });

    // About button - opens the page on my site for information about this extension (https://ben.bike/code/localhoster)
    document.getElementById("about").addEventListener("click", function() {
        chrome.tabs.create({ url: "https://ben.bike/code/localhoster/ " });
    });

    // Source button - opens the Github URL for this project (https://github.com/bendotbike/localhoster)
    document.getElementById("source").addEventListener("click", function() {
        chrome.tabs.create({ url: "https://github.com/bendotbike/localhoster" });
    });
    
});