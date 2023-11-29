import { Request, Response } from 'express';
import { IReponse } from '../types';

const register = (req:Request, res: Response) => {
     res.status(200)
     res.json({
        status: true,
        message: 'Register successfully'
    })
    
 
}

const login = (req: Request, res:Response)=>{

    const {email, password} = req.body;
    const user = email + password;
    res.status(200)
    res.json({
        status: true,
        message: 'Sum successfully calculated',
        data: user
    })

}



export {
        register,
        login
}