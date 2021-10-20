chrome.runtime.onInstalled.addListener(() => {
    console.log('Theater running');
});


chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        let domain = extractHostname(tab.url)
        if (domain === 'www.youtube.com') {
            console.log('YouTube detected');
        }
    });
});


function extractHostname(url) {
    
    let hostname;

    // remove protocol http
    if (url.indexOf("//") > -1)
        hostname = url.split('/')[2];
    else
        hostname = url.split('/')[0];
    
    // remove port number
    hostname = hostname.split(':')[0];
    
    // remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}