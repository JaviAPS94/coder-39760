import Users from "../dao/Mongo/Users.js";
import { createHash, validatePassword } from "../utils.js";


const userService = new Users();

const register = async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
        //Falta validar que eel usuario exista o no en BDD A04
        const hashedPassword = await createHash(password);
        const user = {
            first_name,
            last_name,
            email,
            password: hashedPassword
        }
        const result = await userService.saveUser(user);
        res.send({ status: "success", payload: result._id })
    } catch(error){
        //Usar mecanismo de logging winstion, y además el error rregistrado es demasiado genérico, no esta siendo descriptivo con el error que pasó, deberíamos registrar el error.message A09
        console.log("error");
        res.status(500).send({ status: "error", error})
    }
}

const login = async (req, res) => {
    //Catching de errores no esta implementado A05
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send({ status: "error", error: "Incomplete values" });
    const user = await userService.getUserByEmail(email);
    if (!user) return res.status(400).send({ status: "error", error: "User doesn't exist" });
    const passwordValidation = await validatePassword(user, password);
    if (!passwordValidation) return res.status(400).send({ status: "error", error: "Incorrect credentials" });
    res.send({ status: "success", message: "Logged in!" })
}

export default {

    register,
    login

}