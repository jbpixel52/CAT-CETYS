import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'

import { Header } from "../components/header/header";
import Link from "next/link";
export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
// here we are supposed to redirect to ./login.tsx
    )}else{
      //continue to to main menu
    }
}


