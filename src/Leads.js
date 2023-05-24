import {Box, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import axios from "axios";

const Leads = () => {

    let [leads, setLeads] = useState();

   /* const loadLeads = () => {
        axios({
            method: 'post',
            url: 'https://crm.belmar.pro/api/v1/getstatuses',
            headers: {
                'token': 'ba67df6a-a17c-476f-8e95-bcdb75ed3958',
                'Content-Type': 'application/json',
            },
            data: {
                date_from: '2022-12-01 00:00:00',
                date_to: '2022-12-31 23:59:59',
                page: 1,
                limit: 100,
            }
        }).then(response => {
            console.log(response.data)
        })
    }

    useEffect(() => {
        loadLeads();
    }, [])*/


    return <div style={{height: '600px'}}>
        <DataGrid columns={[]} rows={[]}/>
    </div>
}
export default Leads;