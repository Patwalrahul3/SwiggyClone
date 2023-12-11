import User from "../models/User";
import { validationResult } from "express-validator";

export class UserController {
  static async signup(req, res, next) {
    const errors = validationResult(req);

    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;

    const data = { name, phone, email, password, type, status };

    try {
      let user = await new User(data).save();
      res.status(201).send(user);
    } catch (e) {
      next(e);
    }

    // let user = new User(data);
    // user.save().then((user) =>{
    //     res.send(user);
    // }).catch(e=> next(e));

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map((x) => x.msg) });
    }
  }
}
