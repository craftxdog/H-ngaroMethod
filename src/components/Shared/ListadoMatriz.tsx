const ListadoMatriz = ({ matrizCopia, datosApi }) => {
    const {matriz, iteracion_1, iteracion_2, matriz_tachada, resultado_final} = datosApi
    return (
        <>
            <p className="font-bold mb-3 text-gray-700 uppercase">Matriz: {''}
                <span className="font-normal normal-case">{matriz}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 1: {''}
                <span className="font-normal normal-case">{iteracion_1}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 2: {''}
                <span className="font-normal normal-case">{iteracion_2}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Matriz Tachada: {''}
                <span className="font-normal normal-case">{matriz_tachada}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Resultado Final: {''}
                <span className="font-normal normal-case">{resultado_final}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Matriz: {''}
                <span className="font-normal normal-case">{matrizCopia}</span>
            </p>
        </>
    )
}

export default ListadoMatriz