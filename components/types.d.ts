interface Todo {
    id: string;
    text: string;
    complete: number;
    ddl: Date;
    priority: number;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string, date: number, priority: number) => void

type FinishTodo = (id: string) => void

type EditTodo = (id: string, text: string, newDdl: number, newPriorty: number) => void;

type AddWord = (text: string) => void;

type DeleteTodo = (id: string) => void