import Link from "next/link";

export default function Navbar(){

    return(

        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Sistema de Cadastro</h1>

                <div className="flex gap-6">
                    <Link href="/cadastro">
                    Cadastro de Produtos
                    </Link>

                    <Link href="/cadastroUsuario">
                    Cadastro de Usuarios
                    </Link>
                </div>
            </div>
        </nav>
    )

}