import React, { useState } from 'react'

// MUI
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'

export default function SimpleSnackbar({ value, ...rest }) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  return (
    <>
      <Box component="span" sx={{cursor: 'pointer', display: 'block'}} onClick={handleClickOpen}>
        Open simple snackbar
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={value ? `${value} passed by props to SimpleSnackbar component` : 'please fill some value in menu > edit'}
        action={action}
      />
    </>
  )
}