import { PrismaClient } from '@prisma/client'

import bcrypt from 'bcryptjs'

import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const login = async (req, res) => {
  try {
    const { usuario, password } = req.body

    const admin = await prisma.admin.findUnique({
      where: {
        usuario,
      },
    })

    if (!admin) {
      return res.status(401).json({
        error: 'Usuario incorrecto',
      })
    }

    const validPassword =
      await bcrypt.compare(
        password,
        admin.password
      )

    if (!validPassword) {
      return res.status(401).json({
        error: 'Contraseña incorrecta',
      })
    }

    const token = jwt.sign(
      {
        id: admin.id,
      },
      'secretkey',
      {
        expiresIn: '7d',
      }
    )

    res.json({
      token,
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}