import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Error from "../Shared/Error"
import Loader from "./Loader"

export function ModalFilasColumnas({ onEnviarDatos }) {
    const [filas, setFilas] = useState(0)
    const [columnas, setColumnas] = useState(0)
    const [nombreFila, setNombreFila] = useState('')
    const [nombreColumna, setNombreColumna] = useState('')

    const [error, setError] = useState(false)
    const [activar, setActivar] = useState(true)

    const handleSubmit = () => {
        if (Number.isInteger(filas) && filas > 0 && Number.isInteger(columnas) && columnas > 0) {
            setActivar(true)
            onEnviarDatos({ filas, columnas, nombreFila, nombreColumna })
        } else {
            setError(true)
            setActivar(false)
            return
        }
        setFilas(0)
        setColumnas(0)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Filas y Columnas</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Ingrese Valores Para Filas Y Columnas</DialogTitle>
                    {error && <Error>Todos Los Campos Son Obligatorios</Error>}
                    <DialogDescription>
                        Valores Enteros Positivos
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="nombreFila" className="block text-gray-600 uppercase font-bold">
                            Nombre Para Fila
                        </Label>
                        <Input
                            id="nombreFila"
                            type="text"
                            value={nombreFila}
                            onChange={(e) => setNombreFila(String(e.target.value))}
                        />
                    </div>
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="numeroFilas" className="block text-gray-600 uppercase font-bold">
                            Numero de Filas
                        </Label>
                        <Input
                            id="numeroFilas"
                            type="number"
                            min={2}
                            max={20}
                            value={filas}
                            onChange={(e) => setFilas(Number(e.target.value))}
                        />
                    </div>

                </div>
                <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                        <Label htmlFor="nombreColumnas" className="block text-gray-600 uppercase font-bold">
                            Nombre Para Columnas
                        </Label>
                        <Input
                            id="nombreColumnas"
                            type="text"
                            value={nombreColumna}
                            onChange={(e) => setNombreColumna(String(e.target.value))}
                        />
                    </div>
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="numeroColumnas" className="block text-gray-600 uppercase font-bold">
                            Datos Para COLUMNAS
                        </Label>
                        <Input
                            id="numeroColumnas"
                            type="number"
                            min={2}
                            max={20}
                            value={columnas}
                            onChange={(e) => setColumnas(Number(e.target.value))}
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    {error ? (
                        <DialogClose asChild>
                            <Button type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-500 cursor-pointer
                            transition-opacity" onClick={handleSubmit}>
                                {error ? (
                                    <div className="flex gap-3">
                                        <Loader /> Comprobando...
                                    </div>
                                ) : ('Enviar Datos')}
                            </Button>
                        </DialogClose>
                    ) : (
                        <Button type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-500 cursor-pointer
                            transition-opacity" onClick={handleSubmit}>
                            {error ? (
                                <div className="flex gap-3">
                                    <Loader /> Comprobando...
                                </div>
                            ) : ('Enviar Datos')}
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
