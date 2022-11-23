
import { Button } from '@mui/material'
import { React, useState } from 'react'

const Step4 = ({ PrevStepshow, InputeData }) => {

  return (
    <>
      <h1>Your Form Data:</h1>
      <div>
        <h1>Name:-{InputeData.Name !== "" && InputeData.Name !== undefined ? InputeData.Name : "null"}</h1>
        <h1>Email:-{InputeData.Email !== "" && InputeData.Email !== undefined ? InputeData.Email : "null"}</h1>
        <h1>Education-{InputeData.Education !== "" && InputeData.Education !== undefined ? InputeData.Education : "null"}</h1>
        <h1>City:- {InputeData.City !== "" && InputeData.Education !== undefined ? InputeData.City : "null"}</h1>
        <h1>Expirence:-{InputeData.Expirence !== "" && InputeData.Expirence !== undefined ? InputeData.Expirence : "null"}</h1>
        <h1>Technology:-{InputeData.Technology !== "" && InputeData.Technology !== undefined ? InputeData.Technology : "null"}</h1>
      </div><br />
      <Button variant="contained" onClick={PrevStepshow}>Prev</Button>

    </>)
}

export default Step4