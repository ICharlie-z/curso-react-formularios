import { useRef, useState } from "react";

const NoControlado = () => {

    const form = useRef(null)
    const [error, setError] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        // capturar los datos
        const data = new FormData(form.current);
        // console.log(...data.entries())

        const dataObject = Object.fromEntries([...data.entries()]);
        const { title, description, state } = Object.fromEntries([...data.entries()]);

        //Valida los datos
        if (!title.trim() || !description.trim() || !state.trim())
            return setError("Llena el campo")

        //enviar los datos
        console.log(title, description, state);
    }
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input
                type="text"
                placeholder="Ingrese Todo"
                className="form-control mb-2"
                name="title"
                defaultValue="Todo #01"
            />
            <textarea
                className="form-control mb-2"
                placeholder="Ingrese descripción"
                name="description"
                defaultValue="descripcion #01"
            />
            <select
                className="form-select mb-2"
                name="state"
                defaultValue="completado"
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className="btn btn-primary" type="submit">Procesar</button>
            {
                (error !== "") ? error : ''
            }
        </form>
    )
}
export default NoControlado;