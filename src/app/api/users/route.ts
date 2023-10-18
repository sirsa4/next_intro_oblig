import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { z } from "zod"

import { prisma } from "@/lib/prisma"

export const createUserSchema = z.object({
  first_name: z.string().min(1).max(255),
  last_name: z.string().min(1).max(255),
  email: z.string().max(100),
})

export const GET = async () => {
  try {
    const users = await prisma.user.findMany()
    console.log(users);
    return NextResponse.json({ users, status: 200 })
  } catch (error) {
    console.log(error)
  }
}

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json()
    const users = await prisma.user.create({
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email
      },
    });
    console.log();
    
    return NextResponse.json(users)
  } catch (error) {
    console.error(error)
  }
}
