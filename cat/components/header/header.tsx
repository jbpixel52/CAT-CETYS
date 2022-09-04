import { Avatar, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import styles from './header.module.css'; // Import css modules stylesheet as styles

type HeaderProps = {
  title: string,
}

function Header({ title }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <header>
      <Typography gutterBottom
        variant="h4"
        noWrap
        component="a"
        href="/"
        sx={{
          mx:3,
          my:1,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 900,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >{title}</Typography>
      {/* <Avatar sx={{ width: "3em", height: "3em", alignContent: 'center' }} alt={session?.user?.name} src={session?.user?.image!} /> */}

    </header>
  );
}
export { Header }
