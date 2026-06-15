"use client"

import { auth } from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Navbar(){

    const router = useRouter()


    async function logout() {
        try {
            
            await signOut(auth)

            await Swal.fire({
                title:"Logout",
                text:"Voce saiu do sistema!",
                icon:"success"

            })

             router.push("/login");
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Erro",
                text: "Erro ao realizar logout!",
                icon: "error"
            })
        }
    }

    return(

        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Sistema de Cadastro</h1>

                <div className="flex gap-6">
                    <Link href="/cadastro">
                    Cadastro de Produtos
                    </Link>


                    <button onClick={logout} 
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
                    >
                        Sair
                    </button>
                </div>
            </div>
        </nav>
    )

}