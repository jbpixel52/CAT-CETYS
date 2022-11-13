
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types'
import NavBar from '../components/NavBar/navigationbar'



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps: GetServerSideProps = async () => {

// }

const randomEmoji = () => {
    const emojis = [ '😺', '🌍', '📂', '😶‍🌫️', '👽', '🤖', '🚀', '(づ￣ 3￣)づ', '╰(*°▽°*)╯' ];
    return emojis[ Math.floor(Math.random() * emojis.length) ];
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

export default function Desk({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { data: session } = useSession();

    if (session) {
        //MAIN LANDING PAGE, Desk name is a reference to a desk as the first workspace.
        return (<div>
            <Head>
                <title>Editor</title>
            </Head>
            <NavBar />

            <h1 className='text-5xl'>{`Hola ${session?.user?.name} ${randomEmoji()}`}</h1>
            <div>

                <div>
                    {/* LEFT SIDE */}
                </div>

                <div>
                    {/** RIGHT SIDE */}
                </div>
            </div>

        </div>)

    }
}