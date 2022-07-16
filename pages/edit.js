import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// MUI components
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// custom components
import Layout from '../components/Layout'

// context
import { useSomeCtx } from '../contexts/someContext'

// @mui/icons-material
import SaveIcon from '@mui/icons-material/Save'
import PlagiarismIcon from '@mui/icons-material/Plagiarism'

export default function Edit() {
  const [formState, setFormState] = useState({input: '', switch: false})

  const data = useSomeCtx()

  useEffect(() => {
    setFormState(prevState => (
      { ...prevState,
        input: data?.string,
        switch: data?.stringFontWeight
      }
    ))
  }, [data])

  const handleSubmit = (event) => {
    event.preventDefault() // I dont want to reload whole page while submitting form by enter
    data.setString(prevState => ({...prevState, input: formState.input, switch: formState.switch}))
  }

  return (
    <>
      <Head>
        <title>Simple Next.js App - Edit</title>
        <meta name="description" content="here you can edit some value and pass it by context" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>edit page</h1>
        <form onSubmit={handleSubmit}>
          <TextField
              required
              fullWidth
              id="string"
              label="set something what can be shared by context"
              onChange={(e) => setFormState(prevState => ({...prevState, input: e.target.value}))}
              value={formState.input}
            />

            <FormGroup>
              <FormControlLabel control={
                <Switch
                  checked={formState.switch}
                  onChange={(e) => setFormState(prevState => ({...prevState, switch: e.target.checked}))}
                />
              } label="bold" />
            </FormGroup>

            <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
              <Button
                color='primary'
                variant="outlined"
                onClick={handleSubmit}
              >
                Use context <SaveIcon />
              </Button>
              <Link href="/" passHref>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled={formState.input !== data.string || formState.switch !== data.stringFontWeight}
                >
                  Check it on home page! <PlagiarismIcon/>
                </Button>
              </Link>
            </Box>
          <input type="submit" hidden />
        </form>
      </Layout>
    </>
  )
}
