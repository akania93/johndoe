import * as React from "react";
import { Concert } from "./Concert";


export class ConcertTours extends React.Component {

  render() {
    return (
      <div>
        <div className="container-fluid pt100">
          <div className="row">
            <div className="col-md-12">
              <h2 className="concerttours-subtitle">CONCERT TOURS</h2>
            </div>
          </div>
          
          <div className="row mt20">
            <div className="col-md-12">
              <p className="section-description">
                Before the release of NightVisions, Imagine Dragons made appearances on American
                radio and television to promote their extended play. Continued Silence
                and debut single it's Time. The band performed "It's Time" on the July 16,
                2012 airing of NBC late-night talk show The Tonight Show with Jay Leno.
              </p>
            </div>
          </div>
          
          <div className="row mt20 bg bg-image-concerttours">
            <Concert concert={this.props.data} />
          </div>
        </div>
        
      </div>
    );
  }
}