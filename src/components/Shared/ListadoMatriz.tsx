const ListadoMatriz = ({ matrizCopia, apiRespuesta }) => {
    console.log(apiRespuesta)
    console.log(typeof (matrizCopia))

    const mostrarMatriz = (matriz) => {
        if (!matriz || !Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
            return;
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
                    <span className="font-normal normal-case mx-2">{mostrarMatriz(apiRespuesta.matriz)}</span>
                </p>
                <div className="flex justify-between">
                    <div className="mx-4">
                        <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 1: {''}
                            <span className="font-normal normal-case mx-2">{mostrarMatriz(apiRespuesta.iteracion_1)}</span>
                        </p>
                    </div>
                    <div className="mx-4">
                        <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 2: {''}
                            <span className="font-normal normal-case mx-2">{mostrarMatriz(apiRespuesta.iteracion_2)}</span>
                        </p>
                    </div>
                    <div className="mx-4">
                        <p className="font-bold mb-3 text-gray-700 uppercase">Matriz Tachada: {''}
                            <span className="font-normal normal-case mx-2">{mostrarMatriz(apiRespuesta.matriz_tachada)}</span>
                        </p>
                    </div>
                    {mostrarMatriz(apiRespuesta.matriz_resultante)?.length ? (
                        <div className="mx-4">
                            <p className="font-bold mb-3 text-gray-700 uppercase">Matriz Resultante: {''}
                                <span className="font-normal normal-case mx-2">{mostrarMatriz(apiRespuesta.matriz_resultante)}</span>
                            </p>
                        </div>

                    ): (
                        <>

                        </>
                    )
                    
                    }
                    <div className="mx-4">
                        <p className="font-bold mb-3 text-gray-700 uppercase">Resultado Final: {''}
                            <span className="font-normal normal-case mx-2">{mostrarMatriz(apiRespuesta.resultado_final)}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListadoMatriz