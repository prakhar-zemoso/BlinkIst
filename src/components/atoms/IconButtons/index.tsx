import IconButton from '@mui/material/IconButton';
import React from 'react';

interface IconButtonProps{
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?:()=> void;
}

const IconButtonComponent = (props:IconButtonProps)=>{

    const{children,onClick,className,style}=props

    return(
        <IconButton 
        onClick = {onClick}
        className = {className}
        style={style}>
            {children}
        </IconButton>
    )

}
export default IconButtonComponent;