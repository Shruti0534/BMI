'use client'
import Image from "next/image";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";



export default function Home() {
  
    const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const cal =()=>{
      const bmivalue=weight/(height/100)**2;
      setBmi(bmivalue);
    }
  

  return (
   

   <div className=" bg-yellow-50 flex flex-col justify-center  gap-15 opacity-80">
   <h1 className=" flex justify-center px-5 py-5 bg-yellow-400  text-4xl font-serif">BMI CALCULATOR</h1>
      <div className="flex  px-5 py-5  flex-col justify-center items-center  bg-yellow-200 w-full h-full m-auto">
        <div className=" gap-5">
          <h1 className=" text-3xl font-sans">Calculation</h1>
          <form action="">
            <label className=" bg-slate-100 text-2xl font-mono" htmlFor="">weight in kg</label>
            <input className=" bg-slate-100 text-2xl font-mono" type="number" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
            <br/>
            <label className=" bg-slate-100 text-2xl font-mono" htmlFor="">Height in cm</label>
            <input className=" bg-slate-100 text-2xl font-mono" type="number" value={height} onChange={(e)=> setHeight(e.target.value)}/>
            <br/>
            
            <Button onClick={cal}>CALCULATE</Button>

          </form>
          <h2 className=" bg-slate-300 text-2xl font-mono">BMI:{bmi}</h2>

        </div>
       
      </div>
      
    </div>
   
  );
}
