import React from 'react'

import { Button } from '@mui/material';
//import SendIcon from '@mui/icons-material/Send';

export interface ButtonIconProps {
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  color?: string,
  variant?: string,
  style?: React.CSSProperties,
  children?: React.ReactNode,
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  className?: string;
}


export const ButtonComponent=(props:any) => {
    const {startIcon, endIcon, variant, style,children, color,onMouseEnter, onMouseLeave, onClick, className} = props;
  return (
    <>
        <Button 
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        className={className}>
            {children}
        </Button>
       </>
  )
}

export default ButtonComponent;