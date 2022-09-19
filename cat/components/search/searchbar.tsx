import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSession } from 'next-auth/react';
//import { prisma } from '@prisma/client';
//import { DbMakerApplication } from '../../db/maker/dbMakerApplication';

//SEARCH BAR
let database = [{title:'hello'},{title:'world'}]


export default function SearchBar() {
  const { data: session } = useSession();
  if (session){
    return (
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
        sx={{px:"1em", py:"0.5em"}}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={database?.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    );
  }else{return(<></>)}
}

// export const getServerSideProps = async ({ req }) => {
//   let client = new DbMakerApplication();
//   let res = client.getTemplateFields();
//   return res;

// }
