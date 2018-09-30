// Code goes here
var todoList = {
  todos: [],
  displayTodos: function() {
    debugger;
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log('My Todos: ');
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;
    
    for(let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed= true;
      }
    }
    
    
    this.displayTodos();
  },
}  

var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");
console.log(toggleAllButton);

displayTodosButton.addEventListener("click", function() {
  todoList.displayTodos();
});
toggleAllButton.addEventListener("click", function() {
  todoList.toggleAll();
} );
