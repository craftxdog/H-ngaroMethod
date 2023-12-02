import { ModalFilasColumnas } from "../Shared/ModalFilasColumnas"

const Header = ({ onEnviarDatos }) => {

    return (
        <div className="mt-12 md:flex items-center flex-col ">
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Investigación de Operaciones {""}
                <span className="text-indigo-700">Método Húngaro</span>
            </h1>
            <div className="mt-5">
                <ModalFilasColumnas
                    onEnviarDatos={onEnviarDatos}
                />
            </div>
        </div>
    )
}

export default Header