const TablaCosto = ({ apiRespuesta }) => {
    const mostrarMatriz = (matriz) => {
        if (!matriz || !Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
            return;
        }
        return (
            <div>
                <table className="border-collapse table-fixed w-full text-center bg-gray-50">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-300 px-4 py-2">F</th>
                            {matriz[0].map((elemento, indiceElemento) => (
                                <th key={indiceElemento} className="border border-gray-300 px-4 py-2">
                                    C{indiceElemento + 1}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {matriz.map((fila, indiceFila) => (
                            <tr key={indiceFila}>
                                <td className="border border-gray-300 px-4 py-2">
                                    F{indiceFila + 1}
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
            <div>
                    <p className="font-bold mb-3 text-gray-700 uppercase">Costo Total Mínimo:</p>
                    {apiRespuesta.costo}
                </div>
                <div className="mt-5">
                    <p className="font-bold mb-3 text-gray-700 uppercase">Resultado Final</p>
                    <span className="font-normal normal-case">
                        {mostrarMatriz(apiRespuesta.resultado_final)}
                    </span>
                </div>
        </>
    )
}

export default TablaCosto