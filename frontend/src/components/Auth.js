"use client"
const { useRouter } = require("next/router")
const { useState, useEffect, Children } = require("react")


const Auth = ({children }) =>{
    const [isLoggedIn, setIsLoggedIn] = useState()
    const [loading, setLoading] = useState(false)
    const router  = useRouter()

    useEffect(() => {
      const getUser  = () =>{
        const storedUser = localStorage.getItem(user)
        if(storedUser){
            setIsLoggedIn(true)
            setLoading(false)
        }else{
        router.push('/')
        setIsLoggedIn(false)
        }
      }
    
      getUser()
    }, [])
    return <div>{loading ? "" : isLoggedIn ? children : ""}</div>
}
export default Auth