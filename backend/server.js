import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import comprasRoutes from './routes/compras.routes.js'
import autoRoutes from './routes/autos.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/autos', autoRoutes)

app.use('/api/compras', comprasRoutes)

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})