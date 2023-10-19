"use client"

import Link from "next/link"




export default function Home() {
  
  return (
    <div className="container">
     <Link href="/users">Go to users</Link>
    </div>
  )
}
