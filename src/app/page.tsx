"use client"

import Link from "next/link"

import FormUser from "@/components/FormUser"

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 border p-5">
      <h1>Next intro oblig</h1>
      <section className="flex gap-10">
        <article className="flex flex-col p-5 gap-2">
          <h2 className="self-center">Users page</h2>
          <p>I have created a users page using sqlite with prisma.</p>
          <Link href="/users" className="bg-black text-white py-1 px-3 w-fit">Click here Go to users</Link>
        </article>
        <article>
        <article className="flex flex-col p-5 gap-2">
          <h2 className="self-center">Create new users</h2>
          <p>New user can be added to database in form page</p>
          <Link href="/users/new" className="bg-black text-white py-1 px-3 w-fit">Click here to create new user</Link>
        </article>
        </article>
      </section>
    </div>
  )
}
