import { Router } from 'express';

const router = Router();

const users = [];

router.post('/register',(req,res)=>{
    //Validación de campos del usuario, que sea obligatorio el nombrer, apellido, correo, pass A04
    const user = req.body;
    console.log(user);
    //La arquitectura por capas no esta aplicada correctamente A04
    if(users.length===0) user.id = 1;
    else user.id = users[users.length-1].id+1;
    //Antes de guardar el usuario debemos hashear la contraseña, nunca almacenar en texto plano A07
    users.push(user);
    res.send({status:"success",payload:user})
})

export default router;