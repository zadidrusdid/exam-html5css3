function managePopUp() {
    var popUpContainer = '';
    var formElements = '';
    var form = document.getElementsByClassName('pop-up-form');
    form[0].addEventListener("submit", openPopUp);
}

function openPopUp(e) {
    console.log('submit clicked');
    popUpContainer = document.getElementById('pop-up-container');
    popUpContainer.classList.remove("hidden");
    popUpContainer.classList.add('block');
    popUpContainer.classList.add('pop-up-container-position');
    popUpContainer.classList.add('black');
    var closeButton = document.getElementById('close');
    closeButton.onclick = close;
    e.preventDefault();
    grabAndPushFormDataToPopUp();
}

function grabAndPushFormDataToPopUp()
{
    formElements = document.getElementsByClassName('input-class');
    var formValueContainer = document.getElementById('form-information-container');
    var texts = '';
    for(var index = 0; index<formElements.length;index++)
    {
        texts += formElements[index].value+"<br />";
    }
    formValueContainer.innerHTML = texts;
}

function clearFormElementsValue()
{
    console.log('clear form value');
    formElements = document.getElementsByClassName('input-class');
    for(var index = 0; index<formElements.length;index++)
    {
        formElements[index].value = null;
    }
}

function close()
{
    clearFormElementsValue();
    popUpContainer = document.getElementById('pop-up-container');
    popUpContainer.classList.remove('block');
    popUpContainer.classList.remove('pop-up-container-position');
    popUpContainer.classList.remove('black');
    popUpContainer.classList.add("hidden");
}