import { Button } from '@mui/material'
import React from 'react'

const ButtonComponent = ({title, onClick, sx}) => {
  return (
    <>
    <Button
                  variant="contained"
                  sx={sx}
                  onClick = {onClick}
                >
                 {title}
    </Button>
    </>
  )
}

export default ButtonComponent