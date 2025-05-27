import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

const UserSign = () => {
    const [signType, setState] = useState('login');

    function getSignType(){
        console.log(signType);
        if(signType == "login") return (<Login register={setState}/>);
        else return (<Register login={setState}/>)
    }

    return (
        <>
            {getSignType()}
        </>
    );
}


export { UserSign };