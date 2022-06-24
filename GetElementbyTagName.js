//get element by tag name
var li = document.getElementsByTagName('li');
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'orange';
}