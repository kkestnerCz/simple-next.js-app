import React, { useState, useEffect } from 'react'

// MUI
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

// context
import { useSomeCtx } from '../contexts/someContext'

export default function FormDialog() {
    const data = useSomeCtx()

    const [sliderValue, setSliderValue] = useState('12')
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setSliderValue(data.stringFontSize)
      }, [data])

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleUse = () => {
        data.setString(prevState => ({...prevState, slider: sliderValue}))
        setOpen(false)
    }

  return (
    <>
      <Box component="span" sx={{cursor: 'pointer'}} onClick={handleClickOpen}>
        Set font size
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>font size of our value</DialogTitle>
        <DialogContent>
            <DialogContentText>
                here you can change font size of value shared by context
            </DialogContentText>
            <Box sx={{marginTop: '20px'}}>
                <Slider
                    value={parseInt(sliderValue)}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    min={8}
                    max={66}
                    onChange={(e) => setSliderValue(parseInt(e.target.value))}
                />
            </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUse}>Use!</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}