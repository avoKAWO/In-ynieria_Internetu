import {FC} from "react";

type ButtonProps = {
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({onClick}: ButtonProps)=>
{
    // function handleClick()
    // {
    //     console.log("Button clicked");
    // }
    return (<button onClick={onClick}>OK</button>)
}