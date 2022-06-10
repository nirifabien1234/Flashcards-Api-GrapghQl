
import * as jwt from 'jsonwebtoken'
const SECRET = 'Here for you Graghql!'


export interface TokenPayload {
    userId: number;
}

export function decodeAuthHeader(authHeader: String): TokenPayload{
    const token = authHeader.replace("Bearer", "")

    if(!token){
        throw new Error('Token not found!')
    }
    return jwt.verify(token, SECRET) as TokenPayload
}
