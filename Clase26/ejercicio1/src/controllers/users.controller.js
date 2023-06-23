import { 
    saveUser as saveUserService, 
    getUsers as getUsersService 
} from '../services/users.service.js'

const saveUser = async (req, res) => {
    const user = req.body
    await saveUserService(user)
    res.send(user)
}

const getUsers = async (req, res) => {
    const users = await getUsersService()
    res.send(users)
}

export {
    saveUser,
    getUsers
}