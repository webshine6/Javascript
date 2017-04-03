/**
 * HTML Generator using DOM Optimizations (DocumentFragment)
 * @type {{createParagraph: HTMLgen.createParagraph, createDiv: HTMLgen.createDiv, createLink: HTMLgen.createLink}}
 */
var HTMLgen = {
    createParagraph : function (id, text) {
        var paragraphItem = document.createElement('p');
        paragraphItem.innerHTML = text;

        var dFrag = document.createDocumentFragment();
        dFrag.appendChild(paragraphItem);

        //  HTML element that is attached to the id of the element, passed as an argument
        document.getElementById(id).appendChild(dFrag);
    },
    createDiv : function (id, className) {
        var divItem = document.createElement('div');
        divItem.className = className;

        var dFrag = document.createDocumentFragment();
        dFrag.appendChild(divItem);

        //  HTML element that is attached to the id of the element, passed as an argument
        document.getElementById(id).appendChild(dFrag);
    },
    createLink : function (id, text, url) {
        var linkItem = document.createElement('a');
        linkItem.text = text;
        linkItem.href = url;

        var dFrag = document.createDocumentFragment();
        dFrag.appendChild(linkItem);

        //  HTML element that is attached to the id of the element, passed as an argument
        document.getElementById(id).appendChild(dFrag);
    }
};

HTMLgen.createParagraph('wrapper', 'SoftUni');
HTMLgen.createDiv('wrapper', 'section');
HTMLgen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');