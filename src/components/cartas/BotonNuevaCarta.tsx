// import * as React from 'React';
// import * as Popover from '@radix-ui/react-popover';
// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { useQuery } from "@tanstack/react-query"

// const postCreateSyllabus = async () => {
//     return fetch('http://localhost:3000/api/db/cartas/create-syllabus', {
//         method: 'POST',
//         body: JSON.stringify({})
//     }).then(r => r.json());
// }

// export default function BotonNuevaCarta() {
//     // const { data } = useQuery([ 'nuevaCarta' ], () => fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json()),
//     //     {
//     //         enabled: false,
//     //     });

//     return (
// <></>
//     )

// }


import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';


const DialogDemo = () => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className="btn">
                Edit profile
            </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    Make changes to your profile here. Click save when you're done.
                </Dialog.Description>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="name">
                        Name
                    </label>
                    <input className="Input" id="name" defaultValue="Pedro Duarte" />
                </fieldset>
                <fieldset className="Fieldset">
                    <label className="Label" htmlFor="username">
                        Username
                    </label>
                    <input className="Input" id="username" defaultValue="@peduarte" />
                </fieldset>
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                    <Dialog.Close asChild>
                        <button className="Button green">Save changes</button>
                    </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                    <button className="IconButton" aria-label="Close">
                    </button>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default DialogDemo;