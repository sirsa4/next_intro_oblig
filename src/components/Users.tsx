"use client"
import { UserType } from '@/lib/type'
import React from 'react'

const Users = ({first_name,last_name, email}: UserType) => {

    
  return (
    <article className="">
        <h3>Navn: {first_name} {last_name}</h3>
        <p>E-post: {email}</p>
    </article>
  )
}

export default Users