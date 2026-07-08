import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash('admin123', 10)

  // Crear administrador si no existe
  await prisma.admin.upsert({
    where: { usuario: 'admin' },
    update: {},
    create: {
      usuario: 'admin',
      password,
    },
  })

  // Crear autos de ejemplo
  await prisma.auto.createMany({
    data: [
      {
        nombre: 'Toyota Corolla',
        modelo: '2024',
        precio: 95000000,
        color: 'Blanco',
        capacidad: 5,
        imagen: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341',
        descripcion: 'Sedán confiable, económico y perfecto para uso diario.',
      },
      {
        nombre: 'Mazda CX-5',
        modelo: '2025',
        precio: 145000000,
        color: 'Gris',
        capacidad: 5,
        imagen: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7',
        descripcion: 'SUV moderna con excelente comodidad y tecnología.',
      },
      {
        nombre: 'Chevrolet Onix',
        modelo: '2023',
        precio: 78000000,
        color: 'Rojo',
        capacidad: 5,
        imagen: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
        descripcion: 'Compacto ideal para la ciudad con gran rendimiento.',
      }
    ],
    skipDuplicates: true,
  })

  console.log('Datos creados correctamente')
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })

  