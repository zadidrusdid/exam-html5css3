function drawTable(row, column, container, useInnerHtml) {
    if(useInnerHtml)
        drawTableWithInnerHtml(row, column, container);
    else
        drawTableByJavascriptTagCrationFunctions(row, column, container);


}

function drawTableWithInnerHtml(row, column, container)
{
    console.log(row+" "+column);
    console.log('Creating table with inner html');
    var innerHtml = document.getElementById(''+container+'');
    var tableOpenTag = '<table border="1">';
    var tableCloseTag  = '</table>';
    var rowOpenTag = '<tr>';
    var rowCloseTag = '</tr>';
    var cellOpenTag = '<td>';
    var cellCloseTag = '</td>';
    var tableContainer = '';
    tableContainer += tableOpenTag;
    for(var rowCount = 0; rowCount<row; rowCount++) {
        tableContainer += rowOpenTag;
        for(var columnCount=0; columnCount<column; columnCount++)
        {
            tableContainer += cellOpenTag+"Row Number: "+(rowCount+1)+"<br />Column Number: "+(columnCount+1)+cellCloseTag;
        }
        tableContainer += rowCloseTag;
    }
    tableContainer += tableCloseTag;
    innerHtml.innerHTML = tableContainer;
}

function drawTableByJavascriptTagCrationFunctions(row, column, container)
{
    console.log(row+" "+column);
    console.log('Creating table');
    var container = document.getElementById(''+container+'');
    var tableTag = document.createElement("table");
    tableTag.setAttribute('border', '1');

    for(var rowCount = 0; rowCount<row; rowCount++) {
        var rowTag = document.createElement("tr");
        for(var columnCount=0; columnCount<column; columnCount++)
        {
            var cellTag = document.createElement("td");
            var text = document.createTextNode("Row Number: "+(rowCount+1)+"Column Number: "+(columnCount+1));
            cellTag.appendChild(text);
            rowTag.appendChild(cellTag);
        }
        tableTag.appendChild(rowTag);
    }
    container.appendChild(tableTag);
}


function drawAllTypeOfTables(row, column)
{
    drawTable(row, column, 'inner-html', true);
    drawTable(row, column, 'html-on-the-fly');
}
