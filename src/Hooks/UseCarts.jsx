
import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { useQuery } from "@tanstack/react-query"


const  useCarts = ()=>{
  const {user } = useContext(AuthContext)
    const { refetch , data:cart=[]} = useQuery({
    queryKey: ['carts' , user?.email],
    queryFn: async()=>{
        const response =  await fetch(`http://localhost:5000/carts?email=${user?.email}`)
           return response.json();
    },
     })
    return[cart , refetch]
  }

  export default useCarts;