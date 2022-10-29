import { useSession } from 'next-auth/react';

type HeaderProps = {
  title: string,
}

export default function Header({ title }: HeaderProps) {
  const { data: session } = useSession();
  return (<div>
  </div>
  );
}
