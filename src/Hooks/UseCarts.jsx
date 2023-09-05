
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./axiosSecured"
import  useAuth  from "./useAuth"


const  useCarts = ()=>{
  const {user ,  loading} = useAuth()
  console.log(user)
 const token = localStorage.getItem('access-token') 
  const [axiosSecure] = useAxiosSecure([])

    const { refetch , data:cart=[]} = useQuery({
    queryKey: ['carts' , user?.email],
     enabled: !loading,
      queryFn: async () => {
             const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, { headers: {
               authorization: `bearer ${token}`
           }})
             return res.json();
         },
  //   queryFn: async()=>{
  //     const res = await axiosSecure(`/carts?email=${user?.email}`)
  //       console.log('res from axios' , res)
  //        return res.data;
  // },

     })
    return[cart , refetch]
  }

  export default useCarts;