import * as React from "react";
import { connect } from "react-redux";
import ScrollableAnchor from 'react-scrollable-anchor';
import NavBar from './Nav';
import { Home } from './Home';
import { DiscographyContainer } from './Discography';
import { ConcertTours } from './ConcertTours';
import { LatterCompositionsContainer } from './LatterCompositions';
import {  LatterCompositionCd, Upcoming,
          History, Contact         
        } from './NoReactableComponents';

class App extends React.Component {

  render() {
    return (
      <div>  

      <NavBar></NavBar>

      <ScrollableAnchor id={'home'}>
        <Home></Home>
      </ScrollableAnchor>

      <ScrollableAnchor id={'discography'}>      
        <DiscographyContainer />
      </ScrollableAnchor>

      <ScrollableAnchor id={'concerts'}>
        <ConcertTours data={this.props.concerts[0]}></ConcertTours>
      </ScrollableAnchor>

      <ScrollableAnchor id={'compositions'}>
        <LatterCompositionsContainer />
      </ScrollableAnchor>

      <ScrollableAnchor id={'new-tracks'}>
        <LatterCompositionCd></LatterCompositionCd>
      </ScrollableAnchor>

      <ScrollableAnchor id={'upcoming'}>
        <Upcoming></Upcoming>
      </ScrollableAnchor>

      <ScrollableAnchor id={'history'}>
        <History></History>
      </ScrollableAnchor>

      <ScrollableAnchor id={'contacts'}>
        <Contact></Contact>
      </ScrollableAnchor>

      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    concerts: state.concerts
  };
};

export const AppContainer = connect(
  mapStateToProps,
  null
)(App);