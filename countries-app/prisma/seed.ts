import { PrismaClient } from "@prisma/client";
import {countries} from "../data/countries";

const prisma = new PrismaClient()


// Populating the database from the information extracted from the API 
async function main(){
    await prisma.country.createMany({
        data: countries,
    })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })