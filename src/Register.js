import {Box, Button, TextField, Typography} from "@mui/material";
import axios from "axios";
import {useState} from "react";

const Register = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    })
    return  <div className="App" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

        <Box sx={{width: '300px', display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '250px'}}>
            <TextField value={values.firstName} onChange={(event) => {
                values.firstName = event.target.value;
                setValues({...values})
            }} label={"First name"} size={'small'}/>
            <TextField value={values.lastName} onChange={(event) => {
                values.lastName = event.target.value;
                setValues({...values})
            }} label={"Last name"} size={'small'}/>
            <TextField value={values.phone} onChange={(event) => {
                values.phone = event.target.value;
                setValues({...values})
            }} label={"Phone"} size={'small'}/>
            <TextField value={values.email} onChange={(event) => {
                values.email = event.target.value;
                setValues({...values})
            }} label={"Email"} size={'small'}/>
            <Button onClick={() => {
                axios({
                    method: 'post',
                    url: "http://5.75.254.31/api/v1/test",
                    data: {
                        ...values
                    }
                }).then(response => {
                    setValues({
                        firstName: '',
                        lastName: '',
                        phone: '',
                        email: ''
                    })
                    alert(response.data.status)
                })
            }} variant={'contained'}>
                Send
            </Button>
            <a href={'/leads'}>Leads</a>
        </Box>
    </div>
}
export default Register;