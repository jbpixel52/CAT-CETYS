import { useState } from "react";

function Dynamic(props){
    const [ dynamicContent, setdynamicContent ] = useState();
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Dynamic;