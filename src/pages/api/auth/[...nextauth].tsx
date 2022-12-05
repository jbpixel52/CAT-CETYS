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


};

export default NextAuth(authOptions);

export { authOptions };