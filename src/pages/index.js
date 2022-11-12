import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    session ? router.push("/escritorio") : router.push("/brand");
  }, []);

  const { data: session } = useSession();
  return <></>;
}
