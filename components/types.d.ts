interface Todo {
    id: string;
    text: string;
    complete: boolean;
    ddl: Date;
    priority: string;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string, date: number, priority: string) => void

type DeleteTodo = (id: string) => void

type EditTodo = (id: string, text: string) => void;

type AddWord = (text: string) => void;