import React, { useContext } from "react";
import Slider from "../../Common/Slider/Slider";
import InTheater from "./InTheater/InTheater";
import "./MoviesListing.css";
import Trailers from "./Trailers/Trailers";
import { GlobalContext } from '../../Context/GlobalState';

export default function MoviesListing() {
    const { bannerData,theaterData,upcomingData } = useContext(GlobalContext);
    debugger
  return (
    <div>
      <Slider bannerData={bannerData}/>
      <InTheater theaterData={theaterData} title={"in theaters"}/>
      <InTheater theaterData={upcomingData} title={"up coming"}/>
      <Trailers/>
    </div>
  );
}
