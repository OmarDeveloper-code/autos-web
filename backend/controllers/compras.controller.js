import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const crearCompra = async (
  req,
  res
) => {
  try {
    const {
      nombres,
      apellidos,
      telefono,
      correo,
      metodoPago,
      autoId,
    } = req.body

    const auto = await prisma.auto.findUnique({
      where: {
        id: Number(autoId),
      },
    })

    if (!auto) {
      return res.status(404).json({
        error: 'Vehículo no encontrado',
      })
    }

    const compra = await prisma.compra.create({
      data: {
        nombres,
        apellidos,
        telefono,
        correo,
        metodoPago,

        total: auto.precio,

        autoId: auto.id,
      },
    })

    res.json(compra)
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}