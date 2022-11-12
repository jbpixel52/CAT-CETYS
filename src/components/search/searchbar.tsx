import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';




export default function SearchBar() {

  const { data: session } = useSession();
  const [ searchOptions, setSearchOptions ] = useState([]);

  
}

