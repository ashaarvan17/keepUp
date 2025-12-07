import {React } from "react";
import "../styles/header.css"
import { Search , SquareChartGantt , Rows2, Settings } from 'lucide-react';

export default function Header() {
  return (
    <div className="header">
      <div className="logo"> lorem ipsum </div>
      <div className="center">
        <Search />
        <input className="search" placeholder= "Search..." /> 
        </div>
        <div className="right">
        {/* <div className="view" > { 1?<SquareChartGantt/>: <Rows2/>}</div> */}
        <div className="view" ><SquareChartGantt/>  </div> {/*has no functionality yet*/}
        <div className="view" ><Rows2/></div> {/*has no functionality yet*/}
        <div className="settings"> <Settings/> {/*has no functionality yet*/}
        </div>
      </div>
    </div>
  );
}


