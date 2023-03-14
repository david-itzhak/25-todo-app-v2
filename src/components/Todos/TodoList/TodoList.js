import Todo from "../Todo";
import styles from "./TodoList.css";

function TodoList({todoList, deleteTodo, toggleTodo}) {

    const getTodoListFromArray = () => {
        return todoList.map((todoObject) => <Todo todoObject={todoObject} key={todoObject.id}
                                                  deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>);
    }

    const getEmptyListMessage = () => {
        return <h2>Todo list is empty</h2>;
    }

    return (
        <div className={styles.todoListContainer}>
            {todoList.length ? getTodoListFromArray() : getEmptyListMessage()}
        </div>
    );
}

export default TodoList;