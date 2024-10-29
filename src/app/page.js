"use client"
import { useContext, useEffect } from "react";
import { Context } from "./AppContext/page";
import Banner from "./components/Banner/page";
export default function Home() {

  const context  = useContext(Context);
  
  return (
  <>
 <Banner/>
 </> 
  );
}
