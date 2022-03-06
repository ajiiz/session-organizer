import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your@email.com"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      authorize: async credentials => {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findFirst({ where: { email: credentials.email } });
        if (!user?.email || !user?.password) {
          return null;
        }

        const checkPassword = await compare(credentials.password, user.password);
        if (checkPassword && user.email === credentials.email) {
          return { id: user.id, email: user.email };
        }

        return null;
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    }
  },
  session: {
    maxAge: 24 * 60 * 60
  },
  pages: {
    signIn: "/signin"
  }
});
