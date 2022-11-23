import { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';
import { Cartas } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/router';

const fetchMetadata = async (): Promise<Cartas[]> => await fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json());

type SearchOptionsBuilderProps = {
    data: Cartas[],
}
const SearchOptionsBuilder = ({ data }: SearchOptionsBuilderProps) => {
    const router = useRouter();
    let optionsFC = [];
    optionsFC = data.map((carta) => (
        <Combobox.Option as='button' onClick={() => router.push(`/carta/${carta?.id}`)} className='btn base-100 shadow-sm ' key={carta?.id} value={carta}>
            {carta?.NOMBRE_CARTA}
        </Combobox.Option>
    ))
    return (<>{optionsFC}</>);
}
type filterProps = {
    data: Cartas[],
    search: string,
};
// eslint-disable-next-line no-unused-vars
const filterCartas = ({ data, search }: filterProps) => {
    let tempCartas;
    if (search != ''  || data.length>0) {
         tempCartas = data.map((carta) => {
            let tempValues = Object.values(carta);
            tempValues = tempValues.map((value) => (value.toString().toLowerCase()));
            if (tempValues.includes(search.toLowerCase())) {
                return carta
            } else return null;
        });
    }
    console.log(tempCartas)
    return tempCartas;
}



const SearchBar = () => {
    const [ search, setSearch ] = useState('🔎 carta por nombre....');
    const [ options, setOptions ] = useState<Cartas[]>([]);


    // eslint-disable-next-line no-unused-vars
    const { data: searchOptions, isSuccess } = useQuery([ 'cartas' ], () => fetchMetadata(), {
        staleTime: 3600000,
        onSuccess: (searchOptions) => { setOptions(searchOptions) },
    });

    const handleSearch = (searchInput: string) => {
        setSearch(searchInput);
        console.log(search);
        //let filtered = filterCartas({ data: options, search: searchInput });
        //setOptions(filtered);
    }
    useEffect(() => {
        console.log('OPTIONS ARE');
        console.log(options)
    }, [ options ])

    return (
        <Combobox as={'div'} value={search} onFocus={() => setSearch('')} className='dropdown' >
            <Combobox.Input as="input" className='input input-bordered w-auto max-w-xs'
                onChange={(e) => handleSearch(e.currentTarget.value)}
            />

            <Combobox.Options className="dropdown-content card card-compact w-auto bg-glass max-h-1/2 overflow-scroll scroll">
                {isSuccess ? <SearchOptionsBuilder data={options} /> : <div>cargando opciones de busqueda</div>}
            </Combobox.Options>

        </Combobox >
    )
}

export default SearchBar;