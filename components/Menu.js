import React, { useState } from 'react'
import Link from 'next/link'

// MUI
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

// Icons
import { Icon } from '@mui/material'



export default function CustomMenu({ children }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
      setAnchorEl(null);
    }

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Icon sx={{color: '#fff'}}>menu</Icon>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <Link href="/edit" passHref><MenuItem onClick={handleClose}>Edit</MenuItem></Link>
                <Link href="/anotherPage" passHref><MenuItem onClick={handleClose}>Another Page</MenuItem></Link>
                <Link href="/pageWithBadName" passHref><MenuItem onClick={handleClose}>Page with bad name</MenuItem></Link>
                <Link href="/" passHref><MenuItem onClick={handleClose}>Home Page</MenuItem></Link>
            </Menu>
        </>
    )
}
