import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IUserInputDTO } from "../models/User";


export class UserController {

    public async signup(req: Request, res: Response) {

        try {
            const { name, email, password } = req.body

            const input: IUserInputDTO = { name, email, password }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signup(input)

            res.status(200).send({ token })

        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
        }
    }

    public async login(req: Request, res: Response) {
            
            try {
                const { email, password } = req.body
    
                const userBusiness = new UserBusiness()
                const token = await userBusiness.login(email, password)
    
                res.status(200).send({ token })
    
            } catch (err) {
                res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
            }
    }


    public async changePassword(req: Request, res: Response) {
        try {
            const { oldPassword, newPassword } = req.body
            const token = req.headers.authorization as string

            const userBusiness = new UserBusiness()
            await userBusiness.changePassword(token, oldPassword, newPassword)

            res.status(200).send({ message: "Password changed successfully" })

        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
        }
    }

    public async profile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            
            console.log(req.headers)

            const userBusiness = new UserBusiness()
            const user = await userBusiness.getProfile(token)

            res.status(200).send(user)

        } catch (err) {
            res.status(err.statusCode || 500).send({ error: err.message || err.sqlMessage })
        }
    }
}