"use client"
import { useState } from "react";

type Usuario = {
  nombre: String,
  edad: number
}

export default function Home() {
  const [valor, setValor] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");
  const evaluarNumero = (num:number) => {
    if(num > 0) return 'El numero es positivo'
    if(num < 0) return 'El numero es negativo'
    return 'Numero es 0'
  }
  const manejarcambio = (e: React.ChangeEvent<HTMLInputElement >) => {
    const numero = Number(e.target.value);
    setValor(e.target.value)
    if(!isNaN(numero)){
      setResultado(evaluarNumero(numero))
    }
    else{
      setResultado("Ingresa un numero valido")
    }
  }

  const usuarios: Usuario[] = [
    {nombre: "Ana", "edad": 22},
    {nombre: "Luis", "edad": 17},
    {nombre: "Carlos", "edad": 30} 
  ]
    const filtrarMayores = (lista:Usuario[]) : Usuario[] => {
      return lista.filter((usuario) => usuario.edad > 18)
    }



    const [email,setEmail] = useState();
    const [clave,setClave] = useState();
    const handleSubmit =(e: React.FormEvent)=>{
      alert("Inicio exitoso")
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <h3>ejercicio  1</h3>
        <input value={valor} onChange={manejarcambio} placeholder="ingresar numero"/>
        <p>resultado: {resultado}</p>

        <h3>Ejercicio 2</h3>
        <div>
            {filtrarMayores(usuarios).map((usuario) =>(
              <li>{usuario.nombre}  -  {usuario.edad} años</li>
            )) }
        </div>
            
            <h3>Ejercicio 3 </h3>
            <form onSubmit={handleSubmit}>
              <input
                value={email}
                type="email"
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500
                      invalid:border-red-500 invalid:text-red-600
                      valid:border-green-500 valid:text-green-600"
                placeholder="Email"
              />
              <input
                value={clave}
                type="password"
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500
                      invalid:border-red-500 invalid:text-red-600
                      valid:border-green-500 valid:text-green-600"
                placeholder="Contraseña"
              />
              <button type="submit"   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ingresar</button>
            </form>
      </main> 
    </div>
  );
}
