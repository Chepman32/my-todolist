import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../Context"
const TodoItem =({todo, index, onChange}) => {
    const classess = [];
    if(todo.completed) {
        classess.push("done")
    }
    const styles = {
        li: {
            display: "flex",
            justifyContent: "spaceBetween",
            alignItems: "center",
            padding: ".5rem 1rem",
            border: "1px solid #ccc",
            borderRadius: "4px", 
        },
        input: {
            marginRight: "1rem"
        }
    }
    const {removeTodo} = useContext(Context);
    return (
            <li className="list__item">
                <span className={classess.join(" ")}>
                    <input type="checkbox" style={styles.input} onChange={() => onChange(todo.id)} checked={todo.completed}/>
                    <strong>{index + 1}</strong>
                    &nbsp;
                    {todo.title}
                </span>
                <button className="redBtn" onClick={() => removeTodo(todo.id)}>&times;</button>
                </li>
    );
};
TodoItem.PpopTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}
export default TodoItem;