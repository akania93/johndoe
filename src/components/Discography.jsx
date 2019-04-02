import * as React from "react";
import { connect } from "react-redux";
import { DiscographyList } from "./DiscographyList";

class Discography extends React.Component {

  render() {
    return (
      <div>
        <div className="container-fluid pt50">
          <div className="row">
            <div className="col-md-12">
              <h2 className="discography-subtitle">DISCOGRAPHY</h2>
            </div>
          </div>
          
          <div className="row mt20">
            <div className="col-md-12">
              <p className="section-description">
                September 4 world heard Night Vision, the first full album. He reached the 2
                position in the chart Billboard 200. The single 'It's Time' took 22
                yh place in the Billboard Hot 100, 4th in the Billboard Alternative
                and Billboard Rock, and now went platinum.
              </p>
            </div>
          </div>
          
          <div className="row mt100 bg bg-image-discography">
            {this.props.discographies ?
            <DiscographyList data={this.props.discographies}></DiscographyList>
            : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    discographies: state.discographies
  };
};

export const DiscographyContainer = connect(
  mapStateToProps,
  null
)(Discography);