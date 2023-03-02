import { RegisterBusiness } from './../business/RegisterBusiness';
import { Request, Response } from "express";

export class RegisterController {
    async register(req:Request, res:Response):Promise<void>{
        try{
            const registerBusiness = new RegisterBusiness()
            await registerBusiness.register({
                email: req.body.email,
                password: req.body.password
            })
            console.log({email:req.body})
            res.status(200).send("Usuario cadastrado.")
        }catch(error:any){
            throw new Error(error.message);
            
        }
    }
}