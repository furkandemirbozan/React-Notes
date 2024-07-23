import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";

function Todo({ todo, Furkan, onUpdateTodo }) {
    const { id, content } = todo

    const [editTable, setEditTable] = useState(false)
    const [newTodo, setNewTodo] = useState(content)

    const removeTodo = () => {
        Furkan(id)
    }
    const updateTodo = () => {
        const req = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(req)
        setEditTable(false)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '6px' }}>
            <div>
                {
                    editTable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} style={{ width: '400px' }} className='todo-input' type="text" /> : content
                }
            </div>
            <div>
                <IoIosRemoveCircle
                    onClick={removeTodo}
                    className='todo-icons'
                />
                {
                    editTable ? <FaCheck className='todo-icons' onClick={updateTodo} />

                        : <FaEdit className='todo-icons' onClick={() => setEditTable(true)} />
                }


            </div>
        </div>
    )
}

export default Todo