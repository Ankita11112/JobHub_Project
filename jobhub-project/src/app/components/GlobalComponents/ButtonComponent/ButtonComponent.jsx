import { Button } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const ButtonComponent = ({title, onClick, sx, search}) => {
  return (
    <>
    <Button       
            
                  variant="contained"
                  sx={sx}
                  onClick = {onClick}
                >
                {search && (<SearchIcon />)} {title}
    </Button>
    </>
  )
}

export default ButtonComponent