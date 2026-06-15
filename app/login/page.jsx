"use client"

import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from '../../firebase/firebaseConfig'
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"


export default function Login(){

    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    const router = useRouter()


    async function entrar() {

        try {
            
            const response = await signInWithEmailAndPassword(
                auth,
                email,
                senha
            )

            

            console.log(response.user)

            await Swal.fire({
                title:"Login",
                text:"Login realizado com sucesso!",
                icon:"success"
            })

            router.push("/cadastro")

        } catch (error) {

            console.log(error)

            Swal.fire({
                title:"Erro",
                text:"Email ou senha incorretos",
                icon:"error"
            })
            
        }
        
    }


    return(

     <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="bg-white p-8 rounded-lg shadow-lg w-96">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                <input
                    type="email"
                    placeholder="Digite seu email..."
                    className="w-full border p-3 rounded mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Digite sua senha..."
                    className="w-full border p-3 rounded mb-4"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button
                    onClick={entrar}
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-800"
                >
                    Entrar
                </button>

            </div>
        
    </div>
        
    )
}