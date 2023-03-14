import {useState} from "react";
import styles from './TodoForm.module.css';
import Button from "../../UI/Button";
function TodoForm({addTodo}) {
    let [text, setText] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        text && addTodo(text);
        setText('');
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input type="text"
                       placeholder="Enter new todo"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                />
                <Button type="submit" title="Submit">Submit</Button>
            </form>
        </div>
    );
}

export default TodoForm;