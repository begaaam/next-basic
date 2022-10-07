import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
const CodeRegion = (data) =>{
    return (
        <>
        {
            data && (
            <>
          <Head>
          <table>{data.nom}</table>
            </Head>
                <Layout>
                <h1>Region : {data.nom}</h1>
                <p>{data.code}</p>
            </Layout>
            </>    
            )
        }
          
        </>
    )
}
export const getServerSideProps=async({params})=>{
        const code = params.code;
        const url = "https://geo.api.gouv.fr/regions/";
        //const {data} = await axios.get(url+code);
        const {data} = await axios.get(`${url}${code}`)
        return{
            props: data
            
        }
}
export default CodeRegion;