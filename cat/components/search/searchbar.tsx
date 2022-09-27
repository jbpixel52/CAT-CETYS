import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSession } from 'next-auth/react';
import prisma from '../../cat-db-management/cat-dbMaker/cartas/dbMakerInfrastructure'
import { useState, useEffect } from 'react';
//import { DbMakerApplication } from '../../db/maker/dbMakerApplication';
import theme from '../../styles/theme'
//SEARCH BAR
let database = [ { title: 'hello' }, { title: 'world' } ]


async function getTitles() {

}



export default  function SearchBar() {

  const [ searchOptions, updateOptions ] = useState([]);

  useEffect( () => {
    // fetch('/api/dbMakerAPI/cartas/getFields').then((res) => res.json()).then((searchOptions) => {
    //   console.log(searchOptions)
    //   updateOptions(searchOptions)

    var res = fetch('api/dbMakerAPI/cartas/getFields').then((res) => res.json());
    console.log(res)
    }
  ,[])






  const { data: session } = useSession();
  if (session) {
    return (
      <Stack spacing={2} sx={{ width:'30ch' }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={[]}
          renderInput={(params) => (
            <TextField
              sx={{borderRadius:1}}
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

// export const getServerSideProps = async ({ req }) => {
//   let client = new DbMakerApplication();
//   let res = client.getTemplateFields();
//   return res;

// }
