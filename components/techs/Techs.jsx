import React, { useContext } from 'react'
import { ColorContext } from "../shared/Footer/colorContext";
import TechCard from './techCard';

const Techs = () => {
  const { color } = useContext(ColorContext);

  return(
      <div className="md:px-40 px-10 mt-24">
          <div>Here is a few of my <br /> <div className="mt-4" style={{color: color}}>My Tech Stack</div></div>
          <div className="pt-10">
              <TechCard />
          </div>
      </div>
  );
}

export default Techs