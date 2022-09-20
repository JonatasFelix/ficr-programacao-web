import { User } from "../models/User"
import BaseDatabase from "./BaseDatabase"

class UserDatabase extends BaseDatabase {

    public static TABLE_USER = "user"

    public async insertUser(user: User): Promise<void> {
        await BaseDatabase.getConnection()
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
            })
            .into(UserDatabase.TABLE_USER)
    }


    public async selectUserByEmail(email: string): Promise<any> {
        const result = await BaseDatabase.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_USER)
            .where({ email })

        return result
    }

    public async selectUserById(id: string): Promise<any> {
        const result = await BaseDatabase.getConnection()
            .select("*")
            .from(UserDatabase.TABLE_USER)
            .where({ id })

        return result
    }

    public async updatePassword(id: string, password: string): Promise<void> {
        await BaseDatabase.getConnection()
            .update({ password })
            .from(UserDatabase.TABLE_USER)
            .where({ id })
    }

}

export default UserDatabase;