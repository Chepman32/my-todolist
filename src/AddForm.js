import React, {useState} from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = " ") {
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
            value,
        onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(" "),
        value: () => value
    }
}
function AddForm({onCreate}) {
    const input = useInputValue(" ")
    function submitHandler(event) {
        if(input.value().trim()) {
            onCreate(input.value());
            input.clear()

            event.preventDefault()
        }
    }
    return (
        <form style={{marginBottom: "1rem"}} onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button>Add todo</button>
        </form>
    )
};
AddForm.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddForm;