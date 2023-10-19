import { prisma } from "@/lib/prisma";
import { NextResponse, type NextRequest } from "next/server";

export const GET = async(request: NextRequest, {params}:{params: {id: string} })=>{
    console.log(params.id);
    
    try {
        const getUser = await prisma.user.findUnique({
            where:{
                id: parseInt(params.id)
            }
        })
        
        return NextResponse.json(getUser)
    } catch (error) {
        console.error(error)
    }
} 