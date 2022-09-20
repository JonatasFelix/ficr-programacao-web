export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
}

export interface IUserInputDTO {
    name: string,
    email: string,
    password: string,
}

export class User {
    static selectUserByEmail(email: string) {
        throw new Error("Method not implemented.");
    }
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
    ) {};

    public getId = () => this.id;
    public getName = () => this.name;
    public getEmail = () => this.email;
    public getPassword = () => this.password;


    public setId = (newId: string) => this.id = newId
    public setName = (newName: string) => this.name = newName
    public setEmail = (newEmail: string) => this.email = newEmail
    public setPassword = (newPassword: string) => this.password = newPassword


    public static toUserModel = (user: any): User => {
        return new User(user.id, user.name, user.email, user.password)
    };

}


export class PublicUser {
    constructor(
        private id: string,
        private name: string,
        private email: string,
    ) {};

    public getId = () => this.id;
    public getName = () => this.name;
    public getEmail = () => this.email;
}