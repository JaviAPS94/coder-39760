import { Router } from 'express'
import { getToys, saveToy } from '../controllers/toys.controller.js'

const router = Router()

router.get('/', getToys)
router.post('/', saveToy)

export default router