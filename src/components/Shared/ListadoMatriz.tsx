const ListadoMatriz = ({ matrizCopia, apiRespuesta }) => {
    console.log(apiRespuesta)
    return (
        <>
            <p className="font-bold mb-3 text-gray-700 uppercase">Matriz: {''}
                <span className="font-normal normal-case">{apiRespuesta.matriz}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 1: {''}
                <span className="font-normal normal-case">{apiRespuesta.iteracion_1}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 2: {''}
                <span className="font-normal normal-case">{apiRespuesta.iteracion_2}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Matriz Tachada: {''}
                <span className="font-normal normal-case">{apiRespuesta.matriz_tachada}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Resultado Final: {''}
                <span className="font-normal normal-case">{apiRespuesta.resultado_final}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Matriz: {''}
                <span className="font-normal normal-case">{matrizCopia}</span>
            </p>
        </>
    )
}

export default ListadoMatriz