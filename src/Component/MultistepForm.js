
import { Button } from '@mui/material'
import { React, useEffect, useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'


const MultistepForm = () => {
    const [counter, setcounter] = useState(1)
    const [issubmit, setissubmit] = useState(false)

    const [InputeData, setInputeData] = useState({
        Name: "",
        Email: "",
        Education: "",
        City: "",
        Expirence: "",
        Technology: "",
    })

    const [error, seterror] = useState({ ...InputeData })

    const handleInputes = (e) => {
        const { name, value } = e.target
        setInputeData({ ...InputeData, [name]: value })
        console.log(InputeData, "InputeData")

        switch (name) {
            case "Name":
                error.Name = value.length > 0 ? "" : "Enter Name"
                break;
            case "Email":
                error.Email = value.length > 0 ? "" : "Enter Email"
                break;

            case "Education":
                error.Education = value.length > 0 ? "" : "Enter Education"
                break;

            case "City":
                error.City = value.length > 0 ? "" : "Enter City"
                break;

            case "Expirence":
                error.Expirence = value.length > 0 ? "" : "Enter Expirence"
                break;
            case "Technology":
                error.Technology = value.length > 0 ? "" : "Enter Technology"
                break;

            default:
                break;
        }
        seterror(error)
    }

    function validate(value) {
        if (!InputeData.Name) {
            error.Name = "Enter Name"
        }
        if (!InputeData.Email) {
            error.Email = "Enter Email"
        }
        if (!InputeData.Education) {
            error.Education = "Enter Education"
        }
        if (!InputeData.City) {
            error.City = "Enter City"
        }
        if (!InputeData.Expirence) {
            error.Expirence = "Enter Expirence"
        }
        if (!InputeData.Technology) {
            error.Technology = "Enter Technology"
        }
        return error
    }

    useEffect(() => {
        if (Object.keys(error).length === 0 && Object.keys(InputeData).length !== 0) {
            console.log(error, "error")
        }
    }, [])


    function NextStepshow() {
        if (counter === 1) {
            setissubmit(true)
            seterror(validate(InputeData)); 
            if (error.Name === "" && error.Email === "") {
                setcounter(counter + 1)
                //  seterror({...error,Education:'',City:""})
            } 
        }
        if(counter === 2){
            if (error.Education === "" && error.City === "") {
                setcounter(counter + 1)
             }
           
        }
        if(counter===3){
            if (error.Expirence === "" && error.Technology === "") {
                setcounter(counter + 1)
                
            }
        }

    }

    function PrevStepshow() {
        setcounter(counter - 1)
        setissubmit(true)
        seterror(validate(InputeData));
    }



    if (counter === 1) {
        return <Step1 NextStepshow={NextStepshow} PrevStepshow={PrevStepshow} handleInputes={handleInputes} InputeData={InputeData} error={error} />
    }
    if (counter === 2) {
        return <Step2 NextStepshow={NextStepshow} PrevStepshow={PrevStepshow} handleInputes={handleInputes} InputeData={InputeData} error={error} />
    }
    if (counter === 3) {
        return <Step3 NextStepshow={NextStepshow} PrevStepshow={PrevStepshow} handleInputes={handleInputes} InputeData={InputeData} error={error} />
    }
    if (counter === 4) {
        return <Step4 NextStepshow={NextStepshow} PrevStepshow={PrevStepshow} handleInputes={handleInputes} InputeData={InputeData} error={error} />
    }

    return (
        <>
            <Button variant="contained" onClick={NextStepshow} >Next</Button>
            <Button variant="contained" onClick={PrevStepshow}>Prev</Button>

        </>
    )
}

export default MultistepForm