import { Button } from '@mui/material'
import React from 'react'

const ButtonComponent = ({title, onClick}) => {
  return (
    <>
    <Button
                  variant="contained"
                  sx={{
                    background: "green",
                    border: 0,
                    borderRadius: 1,
                    boxShadow: "0 3px 5px 2px rgba(63,59,56 .3)",
                    color: "white",
                    height: "50px",
                    width: { xs: "100%", sm: "auto" },
                    py: 3.5,
                    px: 6,
                    fontSize: "14px",
                  }}
                  onClick = {onClick}
                >
                 {title}
    </Button>
    </>
  )
}

export default ButtonComponent