import { Router } from 'express'

import {
  crearCompra,
} from '../controllers/compras.controller.js'

const router = Router()

router.post('/', crearCompra)

export default router