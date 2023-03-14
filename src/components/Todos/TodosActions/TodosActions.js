import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";
import Button from "../../UI/Button";
import styles from './TodosActions.module.css';

function TodosActions({clearAllTodos, deleteCompletedTodos, completedTodosExists}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos"
                    onClick={clearAllTodos}>
                <RiRefreshLine/>
            </Button>
            <Button title="Delete completed Todos"
                    onClick={deleteCompletedTodos}
                    disabled={!completedTodosExists}>
                <RiDeleteBin2Line/>
            </Button>
        </div>
    );
}

export default TodosActions;