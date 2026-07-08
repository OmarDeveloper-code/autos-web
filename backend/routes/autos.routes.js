import { Router } from 'express'

import {
  obtenerAutos,
  obtenerAuto,
  crearAuto,
  eliminarAuto,
  actualizarAuto,
} from '../controllers/autos.controller.js'

const router = Router()

router.get('/', obtenerAutos)

router.get('/:id', obtenerAuto)

router.post('/', crearAuto)

router.delete('/:id', eliminarAuto)

router.put('/:id', actualizarAuto)

export default router