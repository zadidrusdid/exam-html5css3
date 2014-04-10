function createListUsingAjax(elementId)
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'javascript/countries.json', true);
    xhr.setRequestHeader('Content-Type','application/json');

    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4) {
               var countries = eval(xhr.responseText);
               var container = document.getElementById(''+elementId+'');
               var listElement = document.createElement('select');
               for(var index=0; index<countries.length; index++)
               {
                   var optionElement = document.createElement('option');
                   optionElement.setAttribute('value', countries[index].code);
                   var texts = document.createTextNode(countries[index].name);
                   optionElement.appendChild(texts);
                   listElement.appendChild(optionElement);
               }
                console.log(listElement);
                container.appendChild(listElement);
        }
    }
    xhr.send(null);
}