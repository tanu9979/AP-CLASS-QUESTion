import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// const {prisma}=require("../db/config")
async function createUserWithPost({name,email,title,content}){
    if (!name||!email||!title||!content){
        return {secess:false}
    }
    try{
        await WebGLShaderPrecisionFormat.$transaction(async(tx)=>{
            const userdata=await tx.user.create({
                data:{
                    name,email
                }
            })
            await tx.post.create({
                data:{
                    title,content,userId:userdata.Id
                }
            })
        })
        return {secess:true}
    }
    catch(err){
        return {sucess:false}
    }
}