const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".")

//dragstart: The event occurs when the user starts to drag an element
//dragend: The event occurs when the user has finished dragging an element
todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  console.log("dragStart");
}

function dragEnd() {
  console.log("dragEnd");
}
