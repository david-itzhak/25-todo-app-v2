import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import './App.css';
import {TodoForm, TodoList, TodosActions} from "./components/Todos";

function App() {
    let [todoList, setTodoList] = useState([]);

    const addTodoHandler = (todoText) => {
        const todo = {
            text: todoText,
            isCompleted: false,
            id: uuidv4()
        }
        setTodoList([...todoList, todo]);
    }

    const clearAllTodosHandler = () => {
        setTodoList([]);
    }

    const deleteCompletedTodosHandler = () => {
        setTodoList(todoList.filter(todo => !todo.isCompleted));
    }

    const deleteTodoHandler = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    }

    const toggleTodoHandler = (id) => {
        setTodoList(todoList.map(
                (todo) => todo.id === id
                    ? {...todo, isCompleted: !todo.isCompleted}
                    : {...todo}
            )
        )
    }

    const completedTodoCount = todoList.filter(todo => todo.isCompleted).length;

    return (
        <div className="App">
            <h1>Todo app</h1>
            <TodoForm addTodo={addTodoHandler}/>
            {!!todoList.length &&
                <TodosActions clearAllTodos={clearAllTodosHandler}
                              deleteCompletedTodos={deleteCompletedTodosHandler}
                              completedTodosExists={!!completedTodoCount}/>}
            <TodoList todoList={todoList} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler}/>
            {
                !!completedTodoCount &&
                <h2>You have completed {completedTodoCount} todo{completedTodoCount > 1 && 's'}</h2>
            }
        </div>
    );
}

export default App;
