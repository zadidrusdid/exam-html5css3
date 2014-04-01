var scrollDelay = null;
function manageScrolling() {
    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    startButton.onclick = startScrolling;
    stopButton.onclick = stopScrolling;
}

function startScrolling()
{
    console.log('scrolling start');
    var yAxisLeftToGo = screen.height - (window.pageYOffset + window.innerHeight);
    if(((screen.height)>(window.innerHeight)) && (window.pageYOffset<=screen.height))
    {
        window.scrollBy(0,1);
        if(window.pageYOffset<=screen.height) {
            scrollDelay = setTimeout('startScrolling()',1);
        }
    }
}

function stopScrolling()
{
    console.log('scrolling stopped');
    clearTimeout(scrollDelay);
}