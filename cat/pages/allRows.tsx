import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'


export default function examplePage() {

    const { isLoading, error, data } = useQuery([ 'getRows' ], () =>
        fetch('http://localhost:3000/api/db/filas/getRows').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error;
    const listItems = data.map((object) =>
        <p key={object[ 'id' ]}>{object[ 'filaJSON' ]}</p>
    );
    return (<div>
        <h1>
            PAGE TO TEST STUFF! 🔍
        </h1>

        {listItems}


    </div>)
}

