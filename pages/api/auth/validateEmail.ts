import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";

export type ValidateEmailRequest = { email: string };

export type ValidateEmailResponse = { isEmailValid: boolean };

export const path = "api/auth/validateEmail";

export const validateEmail: NextApiHandler<ValidateEmailResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  let isUser = false;

  const requestedData = req.query as ValidateEmailRequest;

  const { email } = requestedData;

  if (!email) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({ where: { email: email } });
  if (user) {
    isUser = true;
  }

  prisma.$disconnect();

  res.json({ isEmailValid: isUser });
};

export default validateEmail;
