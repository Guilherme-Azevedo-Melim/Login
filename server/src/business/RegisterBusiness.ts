import { RegisterDatabase } from './../data/RegisterDatabase'
import { RegisterIdDTO, RegisterDTO } from './../model/creatRegister'
import { generateID } from './../services/idGenerate'


export class RegisterBusiness {
    async register ({password, email}:RegisterDTO): Promise<void>{
        
        if(!password || !email ){
            throw new Error("Informe os dados corretamente.");
        }

        const id = generateID()

        const user:RegisterIdDTO ={
            id,
            email,
            password
        }

        const registerDatabase = new RegisterDatabase()
        await registerDatabase.register(user)
    }
}