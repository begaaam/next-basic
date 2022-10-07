import React from "react";
import { Layout } from "../components/layout/Layout";
import axios from "axios";
import Head from "next/head";
const Departement = ({data}) =>{
        const style={
            padding:10,
            margin :10,
            borderBottom: "1px solid #DDD"
        }
    return(
         <>
         <Head>
            <title>Listes des départements</title>
         </Head>
        <Layout>
        
        {   
            data.map(departement=>(
                <div style={style} key={departement.code}>
                 <h1>{departement.nom}</h1>
                 <div>Code de departement : {departement.code}</div>
                 <div>Code de la region : {departement.codeRegion}</div>
                </div>
            )) 
        }
        </Layout>
         </>
       
    )
}
export const getStaticProps = async()=>{
    const url ="https://geo.api.gouv.fr/departements";
    const {data} = await axios.get(url);
    return {
       props:{
        data
       } 
    }
}
export default Departement;