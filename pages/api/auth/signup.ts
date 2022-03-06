import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import type { NextApiHandler } from "next";

export type SigninRequest = { firstName: string; lastName: string; email: string; password: string; phoneNumber: string };

export const path = "api/auth/signin";

const prisma = new PrismaClient();

export const postHello: NextApiHandler<SigninRequest> = async (req, res) => {
  const requestedData = req.body.params as SigninRequest;

  if (!requestedData) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const { firstName, lastName, email, password, phoneNumber } = requestedData;

  if (!firstName || !lastName || !email || !password || !phoneNumber || !email.includes("@")) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const isUser = await prisma.user.findFirst({ where: { email: email } });
  if (isUser) {
    res.statusMessage = `User already exists!`;
    res.status(422).end();
    return;
  }

  const hashedPassword = await hash(password, 12);
  const newUser = await prisma.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber
    }
  });
  if (!newUser) {
    res.statusMessage = `User could not be created`;
    res.status(400).end();
    return;
  }

  res.statusMessage = `User has been created!`;
  res.status(200).end();
  return;
};

export default postHello;
