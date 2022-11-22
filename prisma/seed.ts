import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

const load = async (): Promise<void> => {
  const newFirstGroup = await prisma.group.create({
    data: {
      name: "First Test Group",
      description: "TestDescription",
      groupCode: "GRP12345679"
    }
  });

  const secondNewGroup = await prisma.group.create({
    data: {
      name: "Second Test Group",
      description: "TestDescription",
      groupCode: "GRP222333444"
    }
  });

  const thirdNewGroup = await prisma.group.create({
    data: {
      name: "Third Test Group",
      description: "TestDescription",
      groupCode: "GRP555666777"
    }
  });
  console.log("Added default groups");

  const hashedPassword = await hash("password", 12);
  const newUser = await prisma.user.create({
    data: {
      email: "ajiiz@gmail.com",
      firstName: "Piotr",
      lastName: "Wrobel",
      password: hashedPassword,
      number: "888999111",
      role: "administrator",
      groups: { connect: [{ id: newFirstGroup.id }, { id: secondNewGroup.id }, { id: thirdNewGroup.id }] }
    }
  });
  console.log("Added default user");

  await prisma.group.update({ where: { id: newFirstGroup.id }, data: { foremanId: newUser.id } });

  await prisma.event.createMany({
    data: [
      {
        name: "Test Case User Event 1",
        description: "Test Case Event 1 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(),
        status: "Future",
        userId: newUser.id
      },
      {
        name: "Test Case User Event 2",
        description: "Test Case Event 2 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(),
        status: "Future",
        userId: newUser.id
      },
      {
        name: "Test Case User Event 3",
        description: "Test Case Event 3 description - keep going. One step closer to the end.",
        startDate: new Date(2022, 9, 21),
        endDate: new Date(2022, 9, 21),
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
        startDate: new Date(2022, 9, 21),
        endDate: new Date(2022, 9, 21),
        status: "Future",
        groupId: newFirstGroup.id
      },
      {
        name: "Test Case Group Event 2",
        description: "Test Case Event 2 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(),
        status: "Future",
        groupId: newFirstGroup.id
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
