import { useState } from "react";
import { Button } from "../ui/button";
import Error from "../Shared/Error"
import Loader from "../Shared/Loader";

const FormularioPrincipal = ({ filas, columnas, onGuardarDatos }) => {
    const [matriz, setMatriz] = useState(Array.from({ length: filas }, () => Array(columnas).fill('')));
    const [error, setError] = useState(false)

    // Manejar cambios en los inputs
    const handleInputChange = (fila, columna, valor) => {
        const nuevaMatriz = matriz.map((filaActual, indexFila) =>
            indexFila === fila ? filaActual.map((valorActual, indexColumna) =>
                indexColumna === columna ? valor : valorActual
            ) : filaActual
        );
        setMatriz(nuevaMatriz);
    };

    // Guardar datos cuando el usuario hace clic en "Guardar"
    const guardarDatos = () => {
        if (matriz.every((fila) => fila.every((valor) => valor.trim() !== ''))) {
            setError(false)
            // Concatenar los valores de todas las filas en un solo array
            const datos = matriz.reduce((acc, fila) => acc.concat(fila), []);
            onGuardarDatos(datos);
        } else {
            setError(true)
            return
        }
    };

    const renderTabla = () => {
        return (
            <table>
                <tbody>
                    {matriz.map((fila, indexFila) => (
                        <tr key={`fila-${indexFila}`}>
                            {fila.map((valor, indexColumna) => (
                                <td key={`celda-${indexFila}-${indexColumna}`}>
                                    <input
                                        type="text"
                                        value={valor}
                                        onChange={(e) => handleInputChange(indexFila, indexColumna, e.target.value)}
                                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (matriz.every((fila) => fila.every((valor) => valor.trim() === ''))) {
            setError(true)
            return
        }
        setError(false)
    };

    return (
        <div>
            <>
                <h2 className="font-black text-3xl text-center">Seguimineto de Datos</h2>
                <p className="text-lg mt-5 text-center mb-10">
                    Registra los Datos y {""} <span className="text-indigo-600 font-bold"> Administralos </span>
                </p>
                <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5" onSubmit={handleSubmit}>
                    {error && <Error> <p>Todos Los Campos Son Obligatorios</p></Error>}
                    <div className="mb-5">
                        {renderTabla()}
                    </div>
                    <Button type="submit" onClick={guardarDatos}
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-500 cursor-pointer
                        transition-opacity" >
                        {error ? (
                            <div className="flex gap-3">
                                <Loader /> Comprobando...
                            </div>
                        ) : ('Enviar Datos')}
                    </Button>
                </form>
            </>
        </div>
    )
}

export default FormularioPrincipal