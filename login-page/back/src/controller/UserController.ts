import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IChangePasswordInputDTO, IDeleteUserInputDTO, ILoginInputDTO, IUserInputDTO } from "../models/User";


export class UserController {

    constructor(private userBusiness: UserBusiness) { };

    public signup = async (req: Request, res: Response) => {

        try {

            const input: IUserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.userBusiness.signup(input)

            res.status(200).send({ token })

        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
        }
    }

    public login = async (req: Request, res: Response) => {

        try {
           const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
           }

            const token = await this.userBusiness.login(input)

            res.status(200).send({ token })

        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
        }
    }

    public changePassword = async (req: Request, res: Response) => {
        try {
            const input: IChangePasswordInputDTO = {
                token: req.headers.authorization as string,
                oldPassword: req.body.oldPassword,
                newPassword: req.body.newPassword
            }

            await this.userBusiness.changePassword(input)

            res.status(200).send({ message: "Password changed successfully" })

        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
        }
    }

    public profile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            console.log(req.headers.authorization)

            const user = await this.userBusiness.getProfile(token)

            res.status(200).send(user)

        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
        }
    }

    public delete = async (req: Request, res: Response) => {
        try {

            const input: IDeleteUserInputDTO = {
                token: req.headers.authorization as string,
                password: req.body.password
            }

            await this.userBusiness.delete(input)

            res.status(200).send({ message: "User deleted successfully" })

        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
        }
    }
}