
import { useQuery } from "@tanstack/react-query";

 const useMenu = () =>{
    const {data : menu=[] , isLoading:laoding , refetch} = useQuery({    
      queryKey: ['menu'] ,
      queryFn: async()=>{
                   const response = await fetch("http://localhost:5000/menu") 
                   return response.json();
                    
              }
         })

  return [menu , laoding , refetch]

  }

export default useMenu;