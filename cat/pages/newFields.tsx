import { useState } from "react";
import { MakeRowRequest } from "../cat-db-management/cat-dbMaker/makeRowRequest";
async function makeRow(text) {
    console.log(text);
    const req = await fetch('http://localhost:3000/api/db/filas/createRow', {
        method: 'POST',
        body: text,
    })
}

export default function newFields() {
    const [ input, setInput ] = useState('');




    return (

        <div className="bg-amber-300">
            <h1 className="text-5xl">LAB</h1>
            <label htmlFor="newField">NEW FIELD</label>

            <textarea name="newField" id="newField" cols={30} rows={3} onChange={(e) => { setInput(e.target.value) }}></textarea>


            <button className="bg-amber-400 p-3" onClick={() => { makeRow((input)) }}>ADD FIELD</button>
        </div>

    )

}