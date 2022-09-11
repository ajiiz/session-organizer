import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

const load = async (): Promise<void> => {
  const hashedPassword = await hash("password", 12);
  await prisma.user.create({
    data: {
      email: "ajiiz@gmail.com",
      firstName: "Piotr",
      lastName: "Wrobel",
      password: hashedPassword,
      number: "888999111",
      role: "administrator"
    }
  });
  console.log("Added default user");

  await prisma.group.create({
    data: {
      name: "TestGroup",
      invitationCode: "GRP12345679"
    }
  });
  console.log("Added default group");
};

load()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
