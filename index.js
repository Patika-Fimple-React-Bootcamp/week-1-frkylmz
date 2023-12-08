document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");
  const loadingDiv = document.getElementById("loading");

  // API'den verileri çekme
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then((response) => response.json())
    .then((data) => {
      loadingDiv.style.display = "none";
      data.forEach((todo) => {
        addTodoToList(todo);
      });
    });

  // Form submit olduğunda
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const titleInput = document.getElementById("title");
    const completedCheckbox = document.getElementById("completed");

    // Yeni todo objesi oluşturma
    const newTodo = {
      title: titleInput.value,
      completed: completedCheckbox.checked,
    };

    // Listeye yeni todo ekleme
    addTodoToList(newTodo);

    // Formu temizleme
    todoForm.reset();
  });

  // Listeye todo eklemek için fonksiyon
  function addTodoToList(todo) {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
    <span>${todo.title}</span> 
    <strong>${todo.completed ? "True" : "False"}</strong>
  `;
    todoList.appendChild(listItem);
  }
});
