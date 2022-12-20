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

  const hashedUserOnePassword = await hash("password", 12);
  const student1 = await prisma.user.create({
    data: {
      email: "student1@gmail.com",
      firstName: "First Name",
      lastName: "Last Name",
      password: hashedUserOnePassword,
      number: "111222333",
      role: "student"
    }
  });

  const student2 = await prisma.user.create({
    data: {
      email: "student2@gmail.com",
      firstName: "First Name",
      lastName: "Last Name",
      password: hashedUserOnePassword,
      number: "111222333",
      role: "student"
    }
  });

  const student3 = await prisma.user.create({
    data: {
      email: "student3@gmail.com",
      firstName: "First Name",
      lastName: "Last Name",
      password: hashedUserOnePassword,
      number: "111222333",
      role: "student"
    }
  });

  const examinator = await prisma.user.create({
    data: {
      email: "examinator@gmail.com",
      firstName: "First Name",
      lastName: "Last Name",
      password: hashedUserOnePassword,
      number: "111222333",
      role: "examinator"
    }
  });

  console.log("Added default users");

  await prisma.group.update({ where: { id: newFirstGroup.id }, data: { foremanId: newUser.id } });

  await prisma.group.update({
    where: { id: secondNewGroup.id },
    data: {
      users: {
        connect: [{ id: student1.id }, { id: student2.id }, { id: student3.id }, { id: examinator.id }]
      }
    }
  });

  await prisma.event.createMany({
    data: [
      {
        name: "Test Case User Event 1",
        description: "Test Case Event 1 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(),
        status: "ended",
        userId: newUser.id
      },
      {
        name: "Test Case User Event 2",
        description: "Test Case Event 2 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(),
        status: "ended",
        userId: newUser.id
      },
      {
        name: "Test Case User Event 3",
        description: "Test Case Event 3 description - keep going. One step closer to the end.",
        startDate: new Date(2022, 9, 21),
        endDate: new Date(2022, 9, 21),
        status: "ended",
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
        status: "ended",
        groupId: newFirstGroup.id
      },
      {
        name: "Test Case Group Event 2",
        description: "Test Case Event 2 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(),
        status: "ended",
        groupId: newFirstGroup.id
      },
      {
        name: "Test Case Group Event 3",
        description: "Test Case Event 3 description - keep going. One step closer to the end.",
        startDate: new Date(),
        endDate: new Date(),
        status: "request",
        groupId: newFirstGroup.id
      },
      {
        name: "Test Case Group Event 4",
        description: "Test Case Event 4 description - keep going. One step closer to the end.",
        startDate: new Date(new Date().setDate(new Date().getDate() + 40)),
        endDate: new Date(new Date().setDate(new Date().getDate() + 42)),
        status: "request",
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
