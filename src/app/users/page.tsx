"use client"

import { useEffect, useState } from "react"

import { UserType } from "@/lib/type"
import Users from "@/components/Users"

const UsersPage = () => {
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
  return (
    <div className="container">
         <h1>Users</h1>
      {
        users?.map((user: UserType)=>{
          return <Users key={user.id} {...user} />
        })
      }
    </div>
  )
}

export default UsersPage