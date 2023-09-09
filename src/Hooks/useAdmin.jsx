import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./AxiosSecured";


const useAdmin = ()=>{
    const {user} = useAuth()
    console.log(user)
    const [axiosSecure] = useAxiosSecure();
    const {data :isAdmin , isLoading:isAdminLoading } = useQuery({
      queryKey: ['isAdmin' , user?.email] ,
      queryFn:  async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
         console.log('res from admin' , res)
         return   res.data.admin ;

       }
    })

    return [isAdmin ,isAdminLoading]
 }

 export default  useAdmin ;