import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

const load = async (): Promise<void> => {
  const hashedPassword = await hash("password", 12);
  await prisma.user.create({
    data: {
      firstName: "Piotr",
      lastName: "Wrobel",
      email: "ajiiz@gmail.com",
      phoneNumber: "000111222",
      password: hashedPassword,
      role: "admin"
    }
  });
  console.log("Added default user");
};

load()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
