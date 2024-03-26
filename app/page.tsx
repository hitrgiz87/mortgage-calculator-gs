"use client";
import { parse } from "path";
import { useState } from "react";

const MortgageCalc = () =>{


  const [principal, setPrincipal] = useState (0); 
  const [intrest, setIntrest] = useState (0);
  const [term, setTerm] = useState (0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);




const calculate = () => {
  if (principal === 0 || intrest === 0 || term === 0) {
    alert("Please fill out all fields");
    return;
  }
  if (intrest > 100 || intrest < 0) {
    alert("Please enter a valid interest rate");
    return;
  }
  if (term > 30 || term < 1) {
    alert("Please enter a valid loan term");
    return;
  }
  if (principal < 0 ) {
    alert("Please enter a valid loan amount");
    return;
  }
  const monthlyIntrest = intrest / 100 / 12;
  const numberOfPayments = term * 12;
  const x = Math.pow(1 + monthlyIntrest, numberOfPayments);
  const monthly = (principal*x*monthlyIntrest)/(x-1);
  const roundedMonthly = parseFloat(monthly.toFixed(2));
  setMonthlyPayment(roundedMonthly);


};




return (
        
          
              <div className="flex flex-col justify-center items-center h-screen">
                <div className="border-8 border-gray-400 p-4  flex flex-col justify-center items-center">
                      <h1>Mortgage Calculator</h1>
                      <br />
                      <h1>Principal</h1>
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded" name="principal" type="text" inputMode="numeric"  value={principal} placeholder="Loan amount" onChange={(e)=> setPrincipal(Number(e.target.value))}/>
                      <br />
                      <h1>Monthly Intrest</h1>
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded" name="interest" type="text"  inputMode="decimal" value={intrest} placeholder="Interest rate" onChange={(e)=> setIntrest(Number(e.target.value))}/>
                      <br />
                      <h1>Term in Years</h1>
                      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded" name="term" type="text" inputMode="numeric" value={term} placeholder="Loan term" onChange={(e)=> setTerm(Number(e.target.value))}/>
                      <br />
                      <button className="bg-blue-500 rounded text-white py-2 px-4" onClick={calculate}>Calculate</button>
                      <br />
                      <h2>Monthly Payment: {monthlyPayment}</h2> 
              </div>

        </div>
      );


};

export default MortgageCalc;

const Home = () => { 
  return (
    <div>
      <MortgageCalc  />

    </div>
  );
}
