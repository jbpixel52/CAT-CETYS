import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import fetcher from '../utils/fetcher';
export default function examplePage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    console.log(data);

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



export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const res = await fetch('http://localhost:3000/api/db/filas/getRows', {
        method: 'GET'
    })
    let req_data = await JSON.parse(JSON.stringify(await res.json()));
    return {
        props: {
            data: req_data
        }
    };
}