import { useEffect, useState } from "react"

import { UserType } from "@/lib/type"
export const useUser = ()=>{
    const [users, setUsers] = useState<UserType | []>([])
    const getUsers = async () => {
      const users = await fetch("http://localhost:3000/api/users")
      const result = await users.json()
      setUsers(result.users)
      //console.log(result)
    }
    useEffect(() => {
      getUsers()
    }, [])
    return {users}
}