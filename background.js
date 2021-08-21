const youtube = 'www.youtube.com'

chrome.runtime.onInstalled.addListener(() =>
{
    console.log('Theater running');
});

chrome.tabs.onActivated.addListener(function (activeInfo)
{
    chrome.tabs.get(activeInfo.tabId, function (tab)
    {
        let domain = extractHostname(tab.url)
        if (domain === youtube) {
            console.log('YouTube');
        }
    });
});


function extractHostname(url)
{
    let hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1)
    {
        hostname = url.split('/')[2];
    }
    else
    {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}