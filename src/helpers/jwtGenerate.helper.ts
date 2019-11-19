import jwt from 'jsonwebtoken';

export function jwtGenerateHelper(_id: string, email: string): string {
    return jwt.sign({ _id: this._id, name: this.name }, process.env.SERVER_KEY);
}
