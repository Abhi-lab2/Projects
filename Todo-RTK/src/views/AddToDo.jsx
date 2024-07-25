import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import './AddToDo.css';

const AddToDo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();
        if (value) {
            dispatch(
                addTodo({
                    title: value,
                })
            );
        }
    }
    return (
        <form onSubmit={onSubmit} className="form-inline mt-3 mb-3 d-flex flex-column flex-md-row align-items-center">
            <div className="form-group mb-2 mr-md-2">
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Add a todo"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
                Add
            </button>
        </form>

    );
}

export default AddToDo