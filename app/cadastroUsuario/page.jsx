"use client"

import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth, db} from '../../firebase/firebaseConfig'
import Swal from "sweetalert2"
import { addDoc, collection} from "firebase/firestore"

export default function CadastroUsuario(){

    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    async function cadastrarUsuario() {
        
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                senha
            );

            await addDoc(collection(db, "usuarios"),{
                email,
                senha
            })



            Swal.fire({
                title:"Cadastro",
                text:"Usuario cadastrado com sucesso",
                icon:"success"
            }   
            ) 
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Erro",
                text:"Erro ao cadastrar usuario!",
                icon:"error"
            })
        }
    }

    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96" >
                <h1 className="text-3xl font-bold text-center mb-6">
                    Cadastro de Usuarios
                </h1>

                <input 
                type="email"
                placeholder="Digite seu email..."
                className="w-full border p-3 rounded mb-4"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                <input 
                type="password"
                placeholder="Digite sua senha..."
                className="w-full border p-3 rounded mb-4"
                value={senha}
                onChange={(e)=> setSenha(e.target.value)}
                />

                <button onClick={cadastrarUsuario} 
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-800"
                >
                    Cadastrar
                </button>


                
            </div>
        </div>
    )
}