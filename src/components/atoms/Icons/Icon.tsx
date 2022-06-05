import React from 'react'


export interface IconProps {
    className?: string,
    onClick?: () => void;
    style?: React.CSSProperties,
   
    src ?:string
}

export const Icons = (props: IconProps) => {
  let {className,src,style, onClick} = props;
  return (

    <img 
    src={src} alt="Logo" onClick={onClick} className={className} style={style}>
    </img>
  )
}
