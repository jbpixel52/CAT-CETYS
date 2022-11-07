//hardcode y luego dinamico
//workspace => terminal => npx prisma studio para ver la info de cartas
import { Cartas, filasCartas } from '@prisma/client';
export default function Field(props) {

    function FieldItem(field) {

        const fetchFilas = async (filas: string[]) => {
            const filasData = [];
            for await (const iterator of filas) {
                const req: filasCartas = await fetch('http://localhost:3000/api/db/filas/getRow',
                    {
                        method: 'POST',
                        body: JSON.stringify({ rowId: iterator }),
                    }).then(r => r.json());
                filasData.push(<p key={req.id}>{req.filaJSON.toString()}</p>);
        
            }
            return filasData;
        return (
            <div>
                
            </div>
        )
    }
}
function FormBuilder(fields: JSON) {

    let fieldsGroup = [];


    let parsedFields;

    return (<></>);

}
}