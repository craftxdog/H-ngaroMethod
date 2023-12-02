const ListadoMatriz = ({ matrizCopia, apiRespuesta }) => {
    console.log(apiRespuesta)
    const mostrarMatriz = (matriz) => {
        if (!Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
            return <p>No se pudo mostrar la matriz.</p>;
        }
        return matriz.map((fila, indiceFila) => (
            <div key={indiceFila} className="flex">
                {fila.map((elemento, indiceElemento) => (
                    <span key={indiceElemento} className="mx-2">
                        {elemento}
                    </span>
                ))}
            </div>
        ));
    };
    return (
        <>
            <div className="mx-5 my-7 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Matriz: {''}
                    <span className="font-normal normal-case">{mostrarMatriz(apiRespuesta.matriz.flat())}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 1: {''}
                    <span className="font-normal normal-case">{mostrarMatriz(apiRespuesta.iteracion_1)}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 2: {''}
                    <span className="font-normal normal-case">{mostrarMatriz(apiRespuesta.iteracion_2)}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Matriz Tachada: {''}
                    <span className="font-normal normal-case">{mostrarMatriz(apiRespuesta.matriz_tachada)}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Resultado Final: {''}
                    <span className="font-normal normal-case">{mostrarMatriz(apiRespuesta.resultado_final)}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Matriz: {''}
                    <span className="font-normal normal-case">{mostrarMatriz(matrizCopia)}</span>
                </p>
            </div>
        </>
    )
}
export default ListadoMatriz