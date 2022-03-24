interface Todo {
    id: string;
    text: string;
    complete: boolean;
    ddl: Date;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void

type DeleteTodo = (id: string) => void

type EditTodo = (id: string, text: string) => void;