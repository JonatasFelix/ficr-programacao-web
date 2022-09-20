import UserDatabase from "../database/UserDatabase";
import BadRequest from "../error/BadRequest";
import Conflict from "../error/Conflict";
import MissingParameters from "../error/MissingParameters";
import NotFound from "../error/NotFound";
import Unauthorized from "../error/Unauthorized";
import { IUserInputDTO, PublicUser, User} from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

import EmailValidator from "../services/EmailValidator";

export class UserBusiness {
    
    public async signup(input: IUserInputDTO): Promise<string> {

        if(!input.name || !input.email || !input.password) {
            throw new MissingParameters("name, email and password are required")
        }

        const emailValidator = new EmailValidator()
        if(!emailValidator.validate(input.email)) {
            throw new BadRequest("Invalid email")
        }

        if(input.password.length < 6) {
            throw new BadRequest("Password must have at least 6 characters")
        }

        if(input.name.length < 3) {
            throw new BadRequest("Name must have at least 3 characters")
        }

        const userDatabese = new UserDatabase()
        const user = await userDatabese.selectUserByEmail(input.email)

        if(user.length) {
            throw new Conflict("Email already registered")
        }

        const idGenerator = new IdGenerator()
        const hashManager = new HashManager()
        const authenticator = new Authenticator()

        const id = idGenerator.generate()
        const hashPassword = await hashManager.hash(input.password)
        const newUser = new User(id, input.name, input.email, hashPassword)
        await userDatabese.insertUser(newUser)

        const token = authenticator.generateToken({id})
        return token
    }

    public async login(email: string, password: string): Promise<any> {
            
            if(!email || !password) {
                throw new MissingParameters("email and password are required")
            }
    
            const emailValidator = new EmailValidator()
            if(!emailValidator.validate(email)) {
                throw new BadRequest("Invalid email")
            }
    
            const userDatabese = new UserDatabase()
            const user = await userDatabese.selectUserByEmail(email)
    
            if(!user.length) {
                throw new NotFound("Email not registered")
            }
    
            const hashManager = new HashManager()
            const isPasswordCorrect = await hashManager.compare(password, user[0].password)
    
            if(!isPasswordCorrect) {
                throw new Unauthorized("Invalid password")
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({id: user[0].id})

            return token


    }

    public async changePassword(token: string, oldPassword: string, newPassword: string): Promise<void> {
        if(!token || !oldPassword || !newPassword) {
            throw new MissingParameters("token, oldPassword and newPassword")
        }

        if(newPassword.length < 6) {
            throw new BadRequest("Password must have at least 6 characters")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenPayload(token)

        if(!tokenData) {
            throw new Unauthorized("Invalid token")
        }

        const userDatabese = new UserDatabase()
        const user = await userDatabese.selectUserById(tokenData.id)

        if(!user.length) {
            throw new NotFound("User not found")
        }

        const hashManager = new HashManager()
        const isPasswordCorrect = await hashManager.compare(oldPassword, user[0].password)

        if(!isPasswordCorrect) {
            throw new Unauthorized("Invalid password")
        }

        const hashPassword = await hashManager.hash(newPassword)
        await userDatabese.updatePassword(tokenData.id, hashPassword)

    }

    public async getProfile(token: string): Promise<PublicUser> {
        if(!token) {
            throw new MissingParameters("token")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenPayload(token)

        if(!tokenData) {
            throw new Unauthorized("Invalid token")
        }

        const userDatabese = new UserDatabase()
        const user = await userDatabese.selectUserById(tokenData.id)

        if(!user.length) {
            throw new NotFound("User not found")
        }

        const publicUser = new PublicUser(user[0].id, user[0].name, user[0].email)

        return publicUser
    }
}

