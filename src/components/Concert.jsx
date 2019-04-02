import * as React from "react";
import { CustomButton } from "./CustomButton"

export const Concert = ({concert}) => {

	return (
    <div className="container concert" style={{marginTop: 400}}>
      <div className="row">
        <div className="col-md-6">
          
          <h5 className="concert-date-header">{concert.date}</h5>
          <h5 className="bold">{concert.disc_name}</h5>
          
          <h3 className="bold pt50">{concert.title}</h3>
          <p className="concert-content">{concert.description}</p>
          
          <a href="https://en.wikipedia.org/wiki/Smoke_%2B_Mirrors_Tour" className="black" target="_blank" rel="noopener noreferrer">
            <CustomButton text="Buy online"></CustomButton>
          </a>
        </div>
      </div>
    </div>
	);
};