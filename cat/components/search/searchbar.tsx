import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';


export default function SearchBar() {

  const { data, error } = useSWR('/api/db/');
  //console.log(JSON.stringify(data));
  const searchOptions: string[] = [];

  if (error) {
    console.log('error while calling api')
  }
  if (data) {
    console.log('DATA IS LOADED')
    const objs: string[] = Object.values(JSON.parse(JSON.stringify(data))); for (const iterator of objs) {
      try {
        searchOptions.push(iterator[ 'id' ])
      } catch (error) {
        console.log(error);
      }
    }



  } else if (!data) {
    console.log('loading data for search box')
  }


  const { data: session } = useSession();
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

