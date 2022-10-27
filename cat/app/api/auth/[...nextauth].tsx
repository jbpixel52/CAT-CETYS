import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";

import authOptions from "../../../utils/auth/options"
export default NextAuth(authOptions);
