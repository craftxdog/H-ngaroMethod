import { useState } from "react";
import Header from "./components/Layouts/Header"
import FormularioPrincipal from "./components/Forms/FormularioPrincipal";
import ListadoMatriz from "./components/Shared/ListadoMatriz";
import TablaCosto from "./components/Shared/TablaCosto";


function App() {
  const [configuracion, setConfiguracion] = useState({ filas: 0, columnas: 0 });
  const [datosMatriz, setDatosMatriz] = useState([]);
  const [datosApi, setDatosApi] = useState(null);
  const [copiarMatriz, setCopiarMatriz] = useState([]);

  // Guardar datos en el estado principal
  const handleGuardarDatos = async (datos) => {
    const copiaMatriz = copiarDatosMatriz(datos);

    await setDatosMatriz(copiaMatriz);

    if (datos.length !== '') {
      try {
        await enviarDatosALaAPI(configuracion.filas, configuracion.columnas, datos);
        await setDatosMatriz([])
        setConfiguracion({ filas: 0, columnas: 0 })
      } catch (error) {
        console.error('Error en la llamada a la API:', error);
      }
    }
  };

  const handleEnviarDatos = ({ filas, columnas }) => {
    setConfiguracion({ filas, columnas });
  };

  const enviarDatosALaAPI = async (filas, columnas, matriz) => {
    try {
      const url = 'https://hungario.onrender.com'; // Reemplaza con la URL de tu API
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          matriz: matriz.flat(),
          fila: filas,
          columnas: columnas,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar datos a la API');
      }
      const datosRespuesta = await response.json();
      // console.log('Datos de la API:', datosRespuesta);
      setDatosApi(datosRespuesta);

    } catch (error) {
      console.error('Error en la llamada a la API:', error);

    }
  };

  const copiarDatosMatriz = (datos) => {
    const copiaMatriz = [...datos];
    setCopiarMatriz(copiaMatriz);
  };


  return (
    <div className="container mx-auto mt-20">
      <Header
        onEnviarDatos={handleEnviarDatos}
      />
      <div className="mt-12 md:flex">
        <div className="md:w-1/2 lg:w-2/5">
          {configuracion.filas > 0 && configuracion.columnas > 0 ? (
            <>
              {configuracion.filas > 0 && configuracion.columnas > 0 && (
                <FormularioPrincipal
                  filas={configuracion.filas}
                  columnas={configuracion.columnas}
                  onGuardarDatos={handleGuardarDatos}
                />
              )}
            </>
          ) : (
            <>
              {datosApi === null ? (
                <>
                  <h2 className="font-black text-3xl text-center">Asegurese de Llenar las filas Y columnas</h2>
                  <p className="text-lg mt-5 text-center mb-10">
                    Registra los Datos y {""} <span className="text-indigo-600 font-bold"> Administralos </span>
                  </p>
                </>
              ) : (
                <>
                  <h2 className="font-black text-3xl text-center">Solución Optima para la Minimización</h2>
                  <p className="text-lg mt-5 text-center mb-10">
                    Costo {""} <span className="text-indigo-600 font-bold"> Total </span>
                  </p>
                  <div className="mx-5 my-7 bg-white shadow-md px-5 py-10 rounded-xl">
                    {datosApi && (<TablaCosto apiRespuesta={datosApi} />)}
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="md:w-1/2 lg:w-3/5 md:h-screen">
          <h2 className="font-black text-3xl text-center">Matriz Generada según los Datos anteriores</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra los {''}
            <span className="text-indigo-700 font-bold">Datos y Resultados</span>
          </p>
          {datosApi && (<ListadoMatriz matrizCopia={copiarMatriz} apiRespuesta={datosApi} />)}
        </div>
      </div>
    </div>
  )
}

export default App
