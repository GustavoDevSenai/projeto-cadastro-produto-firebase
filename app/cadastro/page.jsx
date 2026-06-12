"use client"

import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { db } from "../../firebase/firebaseConfig"
import Swal from "sweetalert2"


export default function Cadastro(){

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [preco,setPreco] = useState("")
    
    async function salvar() {
  try {

    await addDoc(collection(db, "produtos"), {
      nome,
      descricao,
      preco
    });

    Swal.fire({
      title: 'Sucesso!',
      text: 'Produto cadastrado com sucesso.',
      icon: 'success'
    });

    setNome("");
    setDescricao("");
    setPreco("");

  } catch (error) {

    console.error(error);

    Swal.fire({
      title: 'Erro!',
      text: 'Não foi possível cadastrar o produto.',
      icon: 'error'
    });

  }
}
    return(
<div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
  <h1 className="text-2xl font-bold text-center mb-6">
    Cadastro de Produto
  </h1>

  <div className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Digite o nome do produto..."
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
    />

    <input
      type="text"
      placeholder="Digite a descrição do produto..."
      value={descricao}
      onChange={(e) => setDescricao(e.target.value)}
      className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
    />

    <input
      type="text"
      placeholder="Digite o preço do produto..."
      value={preco}
      onChange={(e) => setPreco(e.target.value)}
      className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
    />

    <button
      onClick={salvar}
      className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      Salvar
    </button>
  </div>
</div>


    )
}