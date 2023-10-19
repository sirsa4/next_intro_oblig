"use client"
import { UserType } from '@/lib/type'
import Link from 'next/link'
import React from 'react'

const Users = ({id,first_name,last_name, email}: UserType) => {

    
  return (
    <article className="flex flex-col rounded bg-slate-50 p-5 gap-4 shadow-sm">
        <h3>Navn: {first_name} {last_name}</h3>
        <p>E-post: {email}</p>
        <Link href={`/users/${id}`} className="bg-black text-white w-fit">Go to {first_name}'s page</Link>
    </article>
  )
}

export default Users