import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

//cifrado vs hasheo
//Hasheo es mucho más seguro, porque?, con este mecanismo garantizamos que no vamos a poder revertir los datos a texto plano
//Cifrado, si nosotros sabemos la clave privada con la que estamos cifrando los datos, podemos hacer el proceso inverso.
export const createHash = password =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (user, password) =>
    bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;