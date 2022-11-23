
import { Button, TextField } from '@mui/material'
import { React, useState } from 'react'
import Box from '@mui/material/Box';

const Step1 = ({ NextStepshow, handleInputes, InputeData, error }) => {

  console.log(error, "error")
  return (
    <>
      <h1>Personal Infomation</h1>
      <div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          
          <TextField
            required
            id="outlined-required"
            label="Name"
            name="Name"
            onChange={handleInputes}
            value={InputeData.Name}
            error={error.Name.length > 0 && error.Name}
            helperText={error.Name}
          />

          <TextField
            required
            id="outlined-required"
            label="Email"
            name="Email"
            onChange={handleInputes}
            value={InputeData.Email}
            error={error.Email.length > 0 && error.Email}
            helperText={error.Email}
          />
        </Box>
      </div><br />
      <Button variant="contained" onClick={NextStepshow} >Next</ Button>
    </>)
}

export default Step1