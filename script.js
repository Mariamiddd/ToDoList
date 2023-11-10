function addTodo() {
    var todoText = document.getElementById('todoInput').value;
    if (todoText !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = todoText;
        document.getElementById('todolist').appendChild(listItem);
        document.getElementById('todoInput').value = '';
    }
}

var addButton = document.querySelector('.input-button');
var todoForm = document.getElementById('todoform');

addButton.addEventListener('click', addTodo);

todoForm.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the form from submitting
    addTodo();
});
