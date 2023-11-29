import { Request, Response, NextFunction } from "express"


import jwt from 'jsonwebtoken'
import config from '../config/config'

const secret = config.JWT_SECRET

const authorization = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Authorization  = req.headers.authorization
        if (!Authorization) {
            return res.status(401).send({
                status: false,
                message: 'Unauthorized Access'
                    
            })
        } else {

            const tokenSplit = Authorization.split(" ")
            jwt.verify(tokenSplit[1], secret, async (err:any, decoded:any) => {

                if (err) {
                    return res.status(401).send({
                        status: false,
                        message: 'Unauthorized Acesss'
                        
                    })
                }
                req.params = decoded
                next()
         
            })
        }
    } catch (e) {
         res.status(401).send({
            status: false,
            message: 'Unauthorized Access'
                
         })
         return
    }

}



 export {
    authorization
 }