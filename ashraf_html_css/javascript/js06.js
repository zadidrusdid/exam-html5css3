function eventBinding()
{
    var elem = null;
    elem = document.getElementsByTagName('button')[0];
    do
    {
        bindEvent(elem, 'click', function(){showAlertBox(this);});
        elem = (elem.parentNode!=='undefined') ? elem.parentNode : null;
    }
    while(elem && elem.tagName!=='BODY');

}

function bindEvent(element, type, handler) {
    console.log('bind element.');
    element.addEventListener(type, handler, true);
}

function showAlertBox(elem)
{
    if(elem.tagName)
        alert(elem.tagName);
}