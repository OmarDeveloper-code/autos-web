import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const obtenerAutos = async (req, res) => {
  try {
    const autos = await prisma.auto.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    res.json(autos)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}

export const obtenerAuto = async (req, res) => {
  try {
    const { id } = req.params

    const auto = await prisma.auto.findUnique({
      where: {
        id: Number(id),
      },
    })

    res.json(auto)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}

export const crearAuto = async (req, res) => {
  try {
    const {
      nombre,
      modelo,
      precio,
      color,
      capacidad,
      imagen,
      descripcion,
    } = req.body

    const auto = await prisma.auto.create({
      data: {
        nombre,
        modelo,
        precio: Number(precio),
        color,
        capacidad: Number(capacidad),
        imagen,
        descripcion,
      },
    })

    res.json(auto)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}

export const eliminarAuto = async (req, res) => {
  try {
    const { id } = req.params

    await prisma.auto.delete({
      where: {
        id: Number(id),
      },
    })

    res.json({
      message: 'Vehículo eliminado',
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}

export const actualizarAuto = async (req, res) => {
  try {
    const { id } = req.params

    const {
      nombre,
      modelo,
      precio,
      color,
      capacidad,
      imagen,
      descripcion,
    } = req.body

    const auto = await prisma.auto.update({
      where: {
        id: Number(id),
      },
      data: {
        nombre,
        modelo,
        precio: Number(precio),
        color,
        capacidad: Number(capacidad),
        imagen,
        descripcion,
      },
    })

    res.json(auto)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}