"use client"

import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../../firebase/firebaseConfig"
import Navbar from "./Navbar"


export default function AuthNavbar(){

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)


    useEffect(()=>{
        
        const unsubscribe = onAuthStateChanged(auth, (usuario)=>{
            setUser(usuario)
            setLoading(false)
        })

        return ()=> unsubscribe()
    },[])

    if (loading) return null

    return user ? <Navbar /> : null
}