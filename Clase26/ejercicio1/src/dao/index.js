import mongoToyDao from './dbManagers/toys.dao.js'
import mongoUserDao from './dbManagers/users.dao.js'
//Import del dao de manejo de datos con archivos

const MongoToyDao = new mongoToyDao();
const MongoUserDao = new mongoUserDao();
//Crear las instancia de manejo de datos con archivos

//export const TOYSDAO = config.persistence === 'MEMORY' ? MemoryToyDao : MongoToyDao;
export const TOYSDAO = MongoToyDao;
export const USERSDAO = MongoUserDao;