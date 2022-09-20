import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";



const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
          prompt: "consent",
  
        },
      }),
    ],
    callbacks: {
      async signIn({ account, profile }) {
        if (account.provider === "google") {
          return profile.email_verified && profile.email.endsWith("@cetys.edu.mx");
        }
        return true; // Do different verification for other providers that don't have `email_verified`
      },
    },
    
};
export default authOptions;