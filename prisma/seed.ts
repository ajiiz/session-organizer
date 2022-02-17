import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const load = async (): Promise<void> => {
  await prisma.user.create({
    data: {
      firstName: "Piotr",
      lastName: "Wrobel",
      login: "ajiiz",
      password: "password",
      role: "admin"
    }
  });
  console.log("Added default users");
};

load()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
