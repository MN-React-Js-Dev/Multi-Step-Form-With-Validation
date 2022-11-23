
import { Button, TextField } from '@mui/material'
import { React, useState } from 'react'
import Box from '@mui/material/Box';

const Step3 = ({ NextStepshow, PrevStepshow, handleInputes, InputeData, error }) => {
  return (
    <>
      <h1>Work Place Infomation</h1>
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
          label="Expirence"
          name="Expirence"
          onChange={handleInputes}
          value={InputeData.Expirence}
           error={error.Expirence.length > 0 && error.Expirence}
          helperText={error.Expirence}
        />
        <TextField
          required
          id="outlined-required"
          label="Technology"
          name="Technology"
          onChange={handleInputes}
          value={InputeData.Technology}
           error={error.Technology.length > 0 && error.Technology}
          helperText={error.Technology}
        />
        </Box>
       </div>
      <br/>
      <Button variant="contained" onClick={PrevStepshow}>Prev</Button>
      <Button variant="contained" onClick={NextStepshow} >Next</Button>
    </>)
}

export default Step3