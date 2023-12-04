const ListadoMatriz = ({ matrizCopia, apiRespuesta, nombreFilas, nombreColumnas }) => {
    const mostrarMatriz = (matriz) => {
        if (!matriz || !Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
            return;
        }
        return (
            <div>
                <table className="border-collapse table-fixed w-full text-center bg-gray-50">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-300 px-4 py-2">F/C</th>
                            {matriz[0].map((elemento, indiceElemento) => (
                                <th key={indiceElemento} className="border-b border-gray-300 px-2 py-1 text-xs md:text-sm lg:text-base xl:text-lg 1xl:text-xl whitespace-nowrap">
                                    <>
                                        {nombreColumnas === "" ? (
                                            <div>C {indiceElemento + 1}</div>
                                        ) : (
                                            <div>{nombreColumnas} {indiceElemento + 1}</div>
                                        )}
                                    </>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {matriz.map((fila, indiceFila) => (
                            <tr key={indiceFila}>
                                <td className="border-b border-gray-300 px-2 py-1 text-xs md:text-sm lg:text-base xl:text-lg 1xl:text-xl whitespace-nowrap">
                                    <>
                                        {nombreFilas === "" ? (
                                            <div>F {indiceFila + 1}</div>
                                        ) : (
                                            <div>{nombreFilas} {indiceFila + 1}</div>
                                        )}
                                    </>
                                </td>
                                {fila.map((elemento, indiceElemento) => (
                                    <td key={indiceElemento}
                                        className="border border-gray-300 px-4 py-2">
                                        {elemento}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
    return (
        <>
            <div className="mx-5 my-7 bg-white shadow-md px-5 py-10 rounded-xl">
                <div>
                    <p className="font-bold mb-3 text-gray-700 uppercase">Matriz Principal:</p>
                    {mostrarMatriz(apiRespuesta.matriz)}
                </div>
                <div className="mt-5">
                    <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 1:</p>
                    <span className="font-normal normal-case">
                        {mostrarMatriz(apiRespuesta.iteracion_1)}
                    </span>
                </div>
                <div className="mt-5">
                    <p className="font-bold mb-3 text-gray-700 uppercase">Iteracion 2:</p>
                    <span className="font-normal normal-case">
                        {mostrarMatriz(apiRespuesta.iteracion_2)}
                    </span>
                </div>
                <div className="mt-5">
                    <p className="font-bold mb-3 text-gray-700 uppercase">Matriz Tachada:</p>
                    <span className="font-normal normal-case">
                        {mostrarMatriz(apiRespuesta.matriz_tachada)}
                    </span>
                </div>
                <div className="mt-5">
                    {apiRespuesta.matriz_resultante && apiRespuesta.matriz_resultante.length > 0 ? (
                        <>
                            <p className="font-bold mb-3 text-gray-700 uppercase">Matriz Resultante:</p>
                            <span className="font-normal normal-case">
                                {mostrarMatriz(apiRespuesta.matriz_resultante)}
                            </span>
                        </>
                    ) : (
                        <>

                        </>
                    )}
                </div>
                {/* {mostrarMatriz(apiRespuesta.matriz_resultante)? ? (
                ) : null} */}
            </div>
        </>
    )
}

export default ListadoMatriz