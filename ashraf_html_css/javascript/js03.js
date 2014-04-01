(function() {
    console.log('Self-executable function.');
    var userName='';
    var confirmUserName = '';
    do {
        userName=prompt("Please enter your name");
        confirmUserName = confirm(userName);
    }while(!confirmUserName);
    alert(userName);
    var container = document.createElement('div');
    var texts = document.createTextNode(userName);
    container.appendChild(texts);
    document.getElementsByTagName('body')[0].appendChild(container);
    console.log(userName);
})();