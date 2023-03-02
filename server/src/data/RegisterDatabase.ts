import { RegisterIdDTO } from "../model/creatRegister";
import { BaseDatabase } from "./BaseDatabase";

export class RegisterDatabase extends BaseDatabase {
    private static TABLE_MOVIE = "Register"

    async register({id, password, email}:RegisterIdDTO) :Promise<void> {
        await RegisterDatabase.connection.insert({
            id,
            email,
            password
        }).into(RegisterDatabase.TABLE_MOVIE)
    }
}