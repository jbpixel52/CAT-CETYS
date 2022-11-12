import GoogleProvider from "next-auth/providers/google";
import NextAuth, { type NextAuthOptions } from "next-auth";// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";


const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },

    // adapter: PrismaAdapter(prisma),
    // callbacks: {
    //   async signIn({ account, profile }) {
    //     if (account.provider === "google") {
    //       session?.
    //       return profile.email_verified && (profile?.email.endsWith("@cetys.edu.mx") || profile.email.endsWith("@cetys.mx"));
    //     }
    //     return true; // Do different verification for other providers that don't have `email_verified`
    //   },
    // },
  
  };

export default NextAuth(authOptions);
