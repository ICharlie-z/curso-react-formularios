import { useState } from "react";

const Controlado = () => {

    const [todo, setTodo] = useState({
        title: 'Todo #01',
        description: 'Descripción #01',
        state: 'pendiente',
        priority: true
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
    }
    const handleChange = (e) => {
        const {type,checked,value,name} = e.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Ingrese Todo"
                className="form-control mb-2"
                name="title"
                value={todo.title}
                onChange={handleChange} />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="description"
                value={todo.description}
                onChange={handleChange} />
            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    name="priority"
                    id="inputCheck"
                    className="form-check-input"
                    checked={todo.priority}
                    onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            <select
                className="form-select mb-2"
                name="state"
                value={todo.state}
                onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="submit">Procesar</button>
        </form>
    )
}
export default Controlado;