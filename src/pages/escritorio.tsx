
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import NavBar from '../components/NavBar/navigationbar'

const randomEmoji = () => {
    const emojis = [ 'πΊ', 'π', 'π', 'πΆβπ«οΈ', 'π½', 'π€', 'π', '(γ₯οΏ£ 3οΏ£)γ₯', 'β°(*Β°β½Β°*)β―' ];
    return emojis[ Math.floor(Math.random() * emojis.length) ];
}

export default function Escritorio() {
    const { data: session } = useSession();
    if (session) {
        return (<div className='flex justify-between flex-col py-2 px-10 gap-5'>
            <Head>
                <title>Editor</title>
            </Head>
            <NavBar />

            <h1>{`Hola ${session?.user?.name} ${randomEmoji()}`}</h1>
            <div className='flex flex-auto justify-between'>

                <div>
                    {/* LEFT SIDE */}
                    HELLO WORLD
                </div>

                <div>
                    {/** RIGHT SIDE */}
                    HELLO WORLD!
                </div>
            </div>

        </div>)

    }
}