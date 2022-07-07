
import {React,useEffect,useState} from 'react'
import axios from 'axios';

function Aws() {
    // const [data,Setdata]=useState();
    useEffect(()=>{
        axios.get("https://x88qxlzwvk.execute-api.us-east-1.amazonaws.com/live/?city=canada").then((response)=>{
            console.log("Response",response);
        }).catch((err)=>{
            console.log("error",err);
        })
    },[]);
  return (
    <h1>Roshan</h1>
  )
}

export default Aws;