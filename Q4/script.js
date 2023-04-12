//  function that adds a new list item to an unordered list

function ListItem(addItem){
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(addItem));
    document.querySelector('ul').appendChild(node);
    
}
ListItem("Typescript");
ListItem("JavaScript");
ListItem("Typescript");
