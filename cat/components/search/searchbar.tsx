import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import fetcher from '../../utils/fetcher';
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next/types';




export default function SearchBar() {
  
  const { data: session } = useSession();
  const [ searchOptions, setSearchOptions ] = useState([]);
  //const { data, error } = useSWR('/api/db/filas');
  //console.log(JSON.stringify(data));



  if (session) {
    return (
      <Stack spacing={2} sx={{ width: '25ch' }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={searchOptions}
          renderInput={(params) => (
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="outlined"
              margin="none"
              size="small"
              {...params}
              label="🔍 Buscar Cartas"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    );
  } else { return (<></>) }
}

