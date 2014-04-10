function grabLinksOfCurrentPage() {
    console.log('Grabbing all anchor tags of current page');
    var anchorTags = document.getElementsByTagName('a');
    var ulTag = document.createElement('ul');
    for(var anchorIndex = 0; anchorIndex<anchorTags.length; anchorIndex++) {
        var liTag = document.createElement('li');
	var texts = document.createTextNode(anchorTags[anchorIndex].getAttribute('href'));
        liTag.appendChild(texts);
        ulTag.appendChild(liTag);
    }
    var bodyTag = document.getElementsByTagName('body')[0];
    bodyTag.appendChild(ulTag);
}
