interface ToDo {
  id: number,
  text: string;
  completed: boolean;
}

type ToggleTodo = (selectedTodo: ToDo) => void;
type RemoveTodo = (selectedTodo: ToDo) => void;

interface ToDoItemProps {
  todo: ToDo;
  toggleTodo: ToggleTodo;
  initRemoveTodo: RemoveTodo;
}

type AddTodo = (text: string) => void;

interface ToDoNewItemProps {
  addTodo: AddTodo;
}
