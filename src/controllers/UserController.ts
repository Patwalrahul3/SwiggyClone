import User from '../models/User';
import { validationResult } from 'express-validator';

export class UserController {
    

    static signup(req, res, next){
        const errors = validationResult(req);
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array().map(x => x.msg)})

        }
        
    
    }
}