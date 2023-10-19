"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"

const FormUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const route = useRouter();
    const handlePost = async(e: any)=>{
        e.preventDefault();
        try {
            const data = {first_name: firstName, last_name: lastName,email}
            const newUser = await fetch("http://localhost:3000/api/users",{
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
         route.push("/users");   
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <form onSubmit={handlePost} className="mb-4 flex flex-col gap-4 bg-white px-8 pb-8 pt-6 shadow-md">
      <div>
        <label
          htmlFor="first_name"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          First name:
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          name="first_name"
          id="first_name"
          placeholder="first name"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="last_name"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Last name:
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          name="last_name"
          id="last_name"
          placeholder="last name"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          E-post:
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          type="text"
          name="email"
          id="email"
          placeholder="e-post adresse"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Create User
        </button>
      </div>
    </form>
  )
}

export default FormUser
