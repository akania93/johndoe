import * as React from "react";

export class History extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row bg bg100 bg-image-history"></div>
        </div>
    );
  }
}

export class Contact extends React.Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row bg bg100 bg-image-contact"></div>
        </div>
    );
  }
}

export class Upcoming extends React.Component {
  render() {
    return (
        <div className="container-fluid mt20">
          <div className="row bg bg100 bg-image-upcomingevents"></div>
        </div>
    );
  }
}

export class LatterCompositionCd extends React.Component {
  render() {
    return (
        <div className="container-fluid mt20">
          <div className="row bg bg100 bg-image-lc-cd"></div>
        </div>
    );
  }
}