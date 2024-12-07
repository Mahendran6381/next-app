

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data:{
        name:"admin",
        email:'admin@admin.com',
        password:'admin123'
    }
  })
  console.log(`Created User ${user.name}`)
}

main()
.then(()=>{
    prisma.$disconnect()
})
.catch((e)=>{
    prisma.$disconnect()
    process.exit(1)
    throw new e
})