
import { Button, TextField } from '@mui/material'
import { React, useState } from 'react'
import Box from '@mui/material/Box';

const Step2 = ({ NextStepshow, PrevStepshow, handleInputes, InputeData, error }) => {
  return (
    <>
      <h1>Educational Infomation</h1>
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
            label="Education"
            name='Education'
            value={InputeData.Education}
            onChange={handleInputes}
            error={error.Education.length > 0 && error.Education}
            helperText={error.Education}
          />
          <TextField
            required
            id="outlined-required"
            label="City"
            name='City'
            value={InputeData.City}
            onChange={handleInputes}
            error={error.City.length > 0 && error.City}
            helperText={error.City}
          /></Box>
      </div><br />
      <Button variant="contained" onClick={PrevStepshow}  m={5}>Prev</Button>
      <Button variant="contained" onClick={NextStepshow}  m={5}> Next</Button>
    </>)
}

export default Step2