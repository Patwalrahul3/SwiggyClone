export class UserController {
    

    static login(req, res){
        const data = [{name: 'Rahul'}];
        res.status(200).send(data);
    }
}