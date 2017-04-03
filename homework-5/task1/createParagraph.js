

function createParagraph(id, text) {
    var parItem = document.createElement('p');
    parItem.innerHTML = text;

    var parent = document.getElementById(id);
    parent.appendChild(parItem);
}

createParagraph('wrapper', 'Some text');