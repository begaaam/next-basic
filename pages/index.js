import React,{useEffect} from "react";
import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import axios from "axios";
import Link from "next/link";
 const Home = ({data}) =>{
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD"
  }
 
  return(
    <>
    <Head>
        <title>Liste des regions</title>
    </Head>
   <Layout>
    <div className="container-fluid">
      {
        data.map(region =>(
          <div style={styles} key={region.code}>
          <Link href="/region/[code]" as={`/region/${region.code}`} passHref>
           <h1>{region.nom}</h1>
          </Link> 
            <p>{region.code}</p>
       </div>
        ))
      }
    </div>
    </Layout>
    </>
  )
 }
 export async function getServerSideProps(context){
 
  const {data} = await axios.get(`${process.env.API_GEO}`)
  return{
    props:{
      data
    }
  }
 }
 export default Home;