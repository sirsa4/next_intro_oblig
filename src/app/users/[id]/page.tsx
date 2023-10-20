"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { UserType } from "@/lib/type"
import { useRouter } from "next/navigation"

const page = ({ params }: { params: { id: string } }) => {
  const [user, setUser] = useState<UserType | {}>({})
  console.log(params.id)
  const route = useRouter();
  const getUser = async () => {
    const users = await fetch(`http://localhost:3000/api/users/${params.id}`)
    const result = await users.json()
    console.log(result)
    setUser(result)
    //console.log(result)
  }

  useEffect(() => {
    getUser()
  }, [])

  const deleteUser = async(id:string)=>{
    try {
      const deleteUser = await fetch(`http://localhost:3000/api/users/${params.id}`,{method: "DELETE"});
      route.push("/users")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <article className="flex flex-col rounded bg-slate-50 p-5 gap-4 shadow-sm">
      {user ? (
        <h3>
          Navn: {user.first_name} {user.last_name}
        </h3>
      ) : null}

      {user ? <p>E-post: {user.email}</p> : null}

      <div>
      <Link href={`/users`} className="bg-black text-white w-fit">Go back to users page</Link>
      <button type="button" onClick={()=>deleteUser(user.id)}>Delete User</button>
      </div>
    </article>
  )
}

export default page
