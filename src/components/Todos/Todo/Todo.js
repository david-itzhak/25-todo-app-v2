import {RiTodoFill, RiDeleteBin2Line} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";
import styles from './Todo.module.css';

function Todo({todoObject, deleteTodo, toggleTodo}) {


    return (
        <div className={`${styles.todo} ${todoObject.isCompleted ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon}/>
            <div className={styles.todoText}>{todoObject.text}</div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todoObject.id)}/>
            <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todoObject.id)}/>
        </div>
    );
}

export default Todo;