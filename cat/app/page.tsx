import Image from 'next/image';
export default function Page() {
    console.log('LANDING PAGE');
    return (
        <div className="flex flex-col h-screen bg-slate-400 p-9">
            <div className="grid overflow-hidden grid-lines auto-cols-auto auto-rows-auto gap-2.5 grid-flow-row">
                <div className="box col-span-2 ">
                    <div className="flex justify-between">
                        {/* Here goes the Header */}
                        <div className="item w-auto h-auto">
                            {/* Left end of header */}
                            <h1 className="text-black text-7xl antialiased font-black hover:font-normal ">CAT🐱</h1>
                        </div>
                        <div className="item w-auto h-auto">
                            {/* Right end of header -> (Login button) */}
                            {/* <Login/> */}
                        </div>
                    </div>

                </div>
                <div className="box row-start-2 col-end-1">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim praesent elementum facilisis leo vel fringilla. Vel fringilla est ullamcorper eget nulla.
                        Blandit turpis cursus in hac.
                    </p>
                    <ul>
                        <li className='list-item'>Nibh ipsum consequat nisl vel pretium lectus quam. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Quis imperdiet massa tincidunt nunc.</li>
                        <li>Condimentum lacinia quis vel eros donec. Risus commodo viverra maecenas accumsan. Netus et malesuada fames ac turpis.</li>
                        <li>Est lorem ipsum dolor sit amet consectetur adipiscing elit. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Magna fermentum iaculis eu non diam.</li>
                    </ul>



                </div>
                <div className="box row-start-2">
                    <Image
                        src="/syllabus_placeholder.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>

    )
}