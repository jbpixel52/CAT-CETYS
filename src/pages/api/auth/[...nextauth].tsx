import GoogleProvider from "next-auth/providers/google";
import NextAuth, { type NextAuthOptions } from "next-auth";// Prisma adapter for NextAuth, optional and can be removed
import { env } from "../../../env/server.mjs";


const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && (profile?.email.endsWith("@cetys.edu.mx") || profile.email.endsWith("@cetys.mx"));
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },

};

export default NextAuth(authOptions);

export { authOptions };