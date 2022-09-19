import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

const load = async (): Promise<void> => {
  const newGroup = await prisma.group.create({
    data: {
      name: "TestGroup",
      invitationCode: "GRP12345679"
    }
  });
  console.log("Added default group");

  const hashedPassword = await hash("password", 12);
  const newUser = await prisma.user.create({
    data: {
      email: "ajiiz@gmail.com",
      firstName: "Piotr",
      lastName: "Wrobel",
      password: hashedPassword,
      number: "888999111",
      role: "administrator",
      groups: { connect: { id: newGroup.id } }
    }
  });
  console.log("Added default user");

  await prisma.event.createMany({
    data: [
      {
        name: "Test Case User Event 1",
        description: "Test Case Event 1 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(2023, 5, 22),
        status: "Future",
        userId: newUser.id
      },
      {
        name: "Test Case User Event 2",
        description: "Test Case Event 2 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(2023, 5, 22),
        status: "Future",
        userId: newUser.id
      },
      {
        name: "Test Case User Event 3",
        description: "Test Case Event 3 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(2023, 5, 22),
        status: "Future",
        userId: newUser.id
      }
    ]
  });
  console.log("Added default user events");

  await prisma.event.createMany({
    data: [
      {
        name: "Test Case Group Event 1",
        description: "Test Case Event 1 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(2023, 5, 22),
        status: "Future",
        groupId: newGroup.id
      },
      {
        name: "Test Case Group Event 2",
        description: "Test Case Event 2 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(2023, 5, 22),
        status: "Future",
        groupId: newGroup.id
      }
    ]
  });
  console.log("Added default group events");
};

load()
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
