"use client"

import { useState } from "react"

export default function Login(){

    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")


    async function entrar(params) {
        console.log("Entrou!")
    }


    return(

        
        <>
            <h1>Login</h1>

        <input 
        placeholder="Digite seu email..."
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />

        <input 
        placeholder="Digite seu email..."
        value={senha}
        onChange={(e)=> setSenha(e.target.value)}
        />

        <button onClick={entrar}>
            Entrar
        </button>

        </>

        

        
        
    )
}