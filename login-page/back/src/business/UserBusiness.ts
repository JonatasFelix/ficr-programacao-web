import UserDatabase from "../database/UserDatabase";
import BadRequest from "../error/BadRequest";
import Conflict from "../error/Conflict";
import MissingParameters from "../error/MissingParameters";
import NotFound from "../error/NotFound";
import Unauthorized from "../error/Unauthorized";
import { IChangePasswordInputDTO, IDeleteUserInputDTO, ILoginInputDTO, IUserInputDTO, PublicUser, User} from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

import EmailValidator from "../services/EmailValidator";

export class UserBusiness {

    constructor(
        private authenticator: Authenticator,
        private emailValidator: EmailValidator,
        private hashManager: HashManager,
        private idGenerator: IdGenerator,
        private userDatabese: UserDatabase
    ) {};

    public signup = async (input: IUserInputDTO): Promise<string> => {

        if(!input.name || !input.email || !input.password) {
            throw new MissingParameters("name, email and password")
        }

        if(!this.emailValidator.validate(input.email)) {
            throw new BadRequest("Invalid email")
        }

        if(input.password.length < 6) {
            throw new BadRequest("Password must have at least 6 characters")
        }

        if(input.name.length < 3) {
            throw new BadRequest("Name must have at least 3 characters")
        }

        const user = await this.userDatabese.selectUserByEmail(input.email)

        if(user.length) {
            throw new Conflict("Email already registered")
        }

        const id = this.idGenerator.generate()
        const hashPassword = await this.hashManager.hash(input.password)
        const newUser = new User(id, input.name, input.email, hashPassword)
        await this.userDatabese.insertUser(newUser)

        const token = this.authenticator.generateToken({id})
        return token
    }

    public login = async (input: ILoginInputDTO): Promise<any> => {

            const { email, password } = input
            
            if(!email || !password) {
                throw new MissingParameters("email and password")
            }

            if(!this.emailValidator.validate(email)) {
                throw new BadRequest("Invalid email")
            }
    
            const user = await this.userDatabese.selectUserByEmail(email)
    
            if(!user.length) {
                throw new NotFound("Email not registered")
            }
    
            const isPasswordCorrect = await this.hashManager.compare(password, user[0].password)
    
            if(!isPasswordCorrect) {
                throw new Unauthorized("Invalid password")
            }

            const token = this.authenticator.generateToken({id: user[0].id})

            return token
    }

    public changePassword = async (input: IChangePasswordInputDTO): Promise<void> => {

        const { token, oldPassword, newPassword } = input

        if(!token || !oldPassword || !newPassword) {
            throw new MissingParameters("token, oldPassword and newPassword")
        }

        if(newPassword.length < 6) {
            throw new BadRequest("Password must have at least 6 characters")
        }

        const tokenData = this.authenticator.getTokenPayload(token)

        if(!tokenData) {
            throw new Unauthorized("Invalid token")
        }

        const user = await this.userDatabese.selectUserById(tokenData.id)

        if(!user.length) {
            throw new NotFound("User not found")
        }

        const isPasswordCorrect = await this.hashManager.compare(oldPassword, user[0].password)

        if(!isPasswordCorrect) {
            throw new Unauthorized("Invalid oldPassword")
        }

        const hashPassword = await this.hashManager.hash(newPassword)
        await this.userDatabese.updatePassword(tokenData.id, hashPassword)
    }

    public getProfile = async (token: string): Promise<PublicUser> => {
        if(!token) {
            throw new MissingParameters("token")
        }

        const tokenData = this.authenticator.getTokenPayload(token)

        if(!tokenData) {
            throw new Unauthorized("Invalid token")
        }
        
        const user = await this.userDatabese.selectUserById(tokenData.id)

        if(!user.length) {
            throw new NotFound("User not found")
        }

        const publicUser = new PublicUser(user[0].id, user[0].name, user[0].email)

        return publicUser
    }

    public delete = async (input: IDeleteUserInputDTO): Promise<void> => {
        const { token, password } = input

        if(!token || !password) {
            throw new MissingParameters("token and password")
        }

        const tokenData = this.authenticator.getTokenPayload(token)

        if(!tokenData) {
            throw new Unauthorized("Invalid token")
        }

        const user = await this.userDatabese.selectUserById(tokenData.id)

        if(!user.length) {
            throw new NotFound("User not found")
        }

        const isPasswordCorrect = await this.hashManager.compare(password, user[0].password)

        if(!isPasswordCorrect) {
            throw new Unauthorized("Invalid password")
        }

        await this.userDatabese.deleteUser(tokenData.id)
    }
}

