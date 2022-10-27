import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { Box, Stack, Avatar, Button } from '@mui/material'
import theme from '../../styles/theme';
import { useSession } from "next-auth/react"
import SearchBar from '../search/searchbar'
import AccountMenu from './AccountMenu';
import NavigationDropDown from './NavigationDropDown';
import Container from '@mui/system/Container/Container';


export default function NavBar() {

  const { data: session, status } = useSession();
  //console.log(session?.user?.image)

  return (<Container
    sx={{ paddingTop: '1em' }}
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
        <Container maxWidth={'lg'}>
          <Link href={'/'}>
            <Typography variant='h4'>
              <b>{session ? <>CAT😼</> : <>CAT😿</>}</b>
            </Typography>
          </Link>
        </Container>
        <Link href='/escritorio'>
          <Button
            variant='contained'
            onClick={() => { }}
            size="small"
          >
            Escritorio
          </Button>
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

  </Container>)
}