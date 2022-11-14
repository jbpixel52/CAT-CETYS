
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import NavBar from '../components/NavBar/navigationbar'

const randomEmoji = () => {
    const emojis = [ '😺', '🌍', '📂', '😶‍🌫️', '👽', '🤖', '🚀', '(づ￣ 3￣)づ', '╰(*°▽°*)╯' ];
    return emojis[ Math.floor(Math.random() * emojis.length) ];
}

export default function Escritorio() {
    const { data: session } = useSession();
    if (session) {
        return (<div className='flex flex-col justify-evenly items-center w-screen'>
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