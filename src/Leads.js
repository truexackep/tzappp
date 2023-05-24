import {Box, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import axios from "axios";

const Leads = () => {

    let [leads, setLeads] = useState([]);

    const columns = [
        {
            field: 'id', headerName: 'ID', flex: 3
        },
        {
            field: 'email', headerName: 'Email', flex: 3
        },
        {
            field: 'ftd', headerName: 'Ftd', flex: 3
        },
        {
            field: 'status', headerName: 'Status', flex: 3
        },
    ]

    const loadLeads = () => {
        axios({
            method: 'get',
            url: 'http://5.75.254.31/api/v1/test',
        }).then(response => {
            leads = response.data.data
            setLeads([...leads])
        })
    }

    useEffect(() => {
        loadLeads();
    }, [])


    return <div style={{height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{height: '600px', width: '900px', marginTop: '120px'}}>
            <Typography variant={'button'} sx={{fontSize: '22px'}}>
                Lead list
            </Typography>
            <DataGrid columns={columns} rows={leads}/>
        </Box>
    </div>
}
export default Leads;