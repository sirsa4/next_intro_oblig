"use client"

import Users from "@/components/Users"
import { useUser } from "@/hooks/useUsers"

const UsersPage = () => {
  const { users } = useUser()
  return (
    <div className="grid grid-cols-4 gap-4">
      {users?.map((user: UserType) => {
        return <Users key={user.id} {...user} />
      })}
    </div>
  )
}

export default UsersPage
