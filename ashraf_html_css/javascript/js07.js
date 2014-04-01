function checkBox() {
    var checkAllButton = document.getElementById('checkAll');
    checkAllButton.onclick = checkAll;
    var uncheckAllButton = document.getElementById('uncheckAll');
    uncheckAllButton.onclick = uncheckAll;

    var checkBoxElement = null;
}

function checkAll()
{
    console.log('check all');
    checkBoxElement = document.getElementsByClassName('checkbox');
    for(var index = 0; index<checkBoxElement.length; index++)
    {
        checkBoxElement[index].checked = true;
    }
}

function uncheckAll()
{
    console.log('un-check all');
    checkBoxElement = document.getElementsByClassName('checkbox');
    for(var index = 0; index<checkBoxElement.length; index++)
    {
        checkBoxElement[index].checked = false;
    }
}