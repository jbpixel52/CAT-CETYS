import GoogleProvider from "next-auth/providers/google";

import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";


const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
      async signIn({ account, profile }) {
        if (account.provider === "google") {
          return profile.email_verified && (profile.email.endsWith("@cetys.edu.mx") || profile.email.endsWith("@cetys.mx"));
        }
        return true; // Do different verification for other providers that don't have `email_verified`
      },
    },
  
  };

export default NextAuth(authOptions);
