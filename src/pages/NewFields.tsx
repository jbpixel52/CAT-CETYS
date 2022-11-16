import { useState } from "react";
async function makeRow(text: string) {
    console.log(text);
    const req = await fetch('http://localhost:3000/api/db/filas/createRow', {
        method: 'POST',
        body: text,
    })
    
}

export default function NewFields() {
    const [ Input, setInput ] = useState('');
    return (

        <div className="bg-amber-300">
            <h1>LAB</h1>
            <label htmlFor="newField">NEW FIELD</label>

            <textarea name="newField" id="newField" cols={30} rows={3} onChange={(e) => { setInput(e.target.value) }}></textarea>


            <button onClick={() => { void makeRow((Input)) }}>ADD FIELD</button>
        </div>

    )

}