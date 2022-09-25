import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { Box, Stack, Avatar } from '@mui/material'
import Login from '../login/login'
import theme from '../../styles/theme';
import { useSession } from "next-auth/react"
import SearchBar from '../search/searchbar'
import AccountMenu from './AccountMenu';
import NavigationDropDown from './NavigationDropDown';


export default function NavBar() {
  const { data: session, status } = useSession();
  console.log(session?.user?.image)

  return (<Box
    sx={{ px: '2em', py: '1em' }}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}

    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={5}
        justifyContent="flex-start"
      >
        <Link href={'/'}>
          <Typography variant='h4'>
            <b>{session ? <>CAT😼</> : <>CAT😿</>}</b>
          </Typography>

        </Link>
        <NavigationDropDown />
      </Stack>



      <Stack
        direction="row"
        alignItems="center"
        spacing={5}
        justifyContent="flex-end"
      >
        <SearchBar />

        {session ? <AccountMenu /> : <></>}
      </Stack>


    </Stack>

  </Box>)
}