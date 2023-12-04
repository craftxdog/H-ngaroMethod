const TablaCosto = ({ apiRespuesta, nombreFilas, nombreColumnas }) => {
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
                                    <td key={indiceElemento} className="border border-gray-300 px-4 py-2">
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
            <div className="mt-5">
                <p className="font-bold mb-3 text-gray-700 uppercase">Resultado Final</p>
                <span className="font-normal normal-case">
                    {mostrarMatriz(apiRespuesta.resultado_final)}
                </span>
                <div>
                    <p className="font-bold mb-3 text-gray-700 uppercase">Costo Total Mínimo:
                        <span className="font-normal normal-case"> {apiRespuesta.costo} </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default TablaCosto