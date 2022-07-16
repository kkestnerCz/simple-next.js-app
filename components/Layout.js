import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

// custom components
import Menu from '../components/Menu'

// Styles
import { styled } from '@mui/material/styles'

// Icons
import HomeIcon from '@mui/icons-material/Home'

const Content = styled(Paper)(({ theme }) => ({
    backgroundColor: '#F9F9F9',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '70vh',
    marginTop: '50px'
  }));

const TopMenu = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#00826F',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '30px',
    paddingRight: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    color: '#fff'
  }));

export default function DefaultLayout({ children }) {
  return (
    <>
        <TopMenu>
            <Link href="/">
                <a><HomeIcon/></a>
            </Link>
            <Menu/>
        </TopMenu>

        <Container maxWidth="lg">
                <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Content>{children}</Content>
                        </Grid>
                </Grid>
        </Container>
    </>
  )
}
