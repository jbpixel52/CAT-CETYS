//hardcode y luego dinamico
//workspace => terminal => npx prisma studio para ver la info de cartas
import { filasCartas, camposBase } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

const fetchFila = async (id: string) => {
    const filasData = [];
    const req: filasCartas = await fetch('http://localhost:3000/api/db/filas/getRow',
        {
            method: 'POST',
            body: JSON.stringify({ rowId: id }),
        }).then(r => r.json());
    console.log(req);
    return req;
}
const getCampoBase = async (campoBaseID: string) => {
    const req: camposBase = await fetch('http://localhost:3000/api/db/templetes/getField',
        {
            method: 'POST',
            body: JSON.stringify({ fieldId: campoBaseID })
        }
    ).then(r => r.json());
    return req;
}

const getCamposBase = async () => {
    const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', {
        method: 'GET'
    }).then(r => r.json());
    return req
}

function Field(id: string) {
    const { isLoading: loadingField, error: fieldError, data: fieldData } = useQuery([ `fieldMetadata${id}` ], () => fetchFila(id));
    const { data: campoBaseData, error: errorCampoBaseData } = useQuery([ `fieldCampoBase${fieldData}` ], () => getCampoBase(fieldData?.campoBase), { enabled: !!fieldData });

    if (fieldData) {
        return (
            <div>
                <form>
                    <label>
                        {campoBaseData ? campoBaseData.DESCRIPCION_CAMPO : !!errorCampoBaseData}
                        <textarea value={fieldData ? fieldData.filaJSON.toString() : ''} onChange={() => {console.log('typed in textarea')}} />
                    </label>
                </form>

            </div>
        )
    }
}

function BaseField(id: string) {
    const { isLoading: loadingField, error: fieldError, data: fieldData } = useQuery([ `fieldMetadata${id}` ], () => fetchFila(id));
    const { data: campoBaseData, error: errorCampoBaseData } = useQuery([ `fieldCampoBase${fieldData}` ], () => getCampoBase(fieldData?.campoBase), { enabled: !!fieldData });


}


interface FormsProps {
    filas: string[],
}

const fetchFilas = async (filas: string[]) => {
    const filasData: filasCartas[] = [];
    for await (const iterator of filas) {
        console.log(iterator);
        const req: filasCartas = await fetch('http://localhost:3000/api/db/filas/getRow',
            {
                method: 'POST',
                body: JSON.stringify({ rowId: iterator }),
            }).then(r => r.json());
        filasData.push(req);
    }
    return filasData;
}

const CamposFormas = async (filas: string[], filasData: filasCartas[], camposBaseData: camposBase[]) => {
    let filledBases: string[];
    let blocks: any[] = [];
    function findObjectFromFunc(object: filasCartas, match: string) {
        if (object.id === match) {
            return true
        }
    }
    if (filasData) {
        filledBases = filasData.map(e => { if (e.campoBase) { return e.id } });
        for (let campoBase of camposBaseData) {
            if (filledBases.includes(campoBase.id)) {
                let matchedObj: filasCartas = filasData.find((fila) => fila.campoBase == campoBase.id);
                console.log(matchedObj);
                blocks.push(

                    <form >
                        <label>
                            {campoBase.DESCRIPCION_CAMPO}
                            <textarea value={matchedObj.filaJSON.toString()}></textarea>
                        </label>
                    </form>

                )
            }
        }
        return blocks;
    }

}

export default function Forms(FormsProps: { filas: any[] }) {
    console.log('Forms');
    const { data: camposBaseData } = useQuery([ 'camposBase' ], () => getCamposBase());
    const { data: filasData } = useQuery([ 'filasData' ], () => fetchFilas(FormsProps.filas));

    const { data: blocks } = useQuery([ 'blocks' ], () => CamposFormas(FormsProps.filas, filasData, camposBaseData), { enabled: !!filasData && !!camposBaseData });


    if (blocks) {
        console.log('returning blocks')
        return (<>{blocks}</>)
    };
    return (<>Forma</>)
}

