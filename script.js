function addTodo() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Lütfen bir görev girin.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Sil";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("todoList").appendChild(li);

  input.value = ""; // Girdiyi temizle
}
