import * as React from "react";
import { connect } from "react-redux";
import { fetchCompositions, toggleCompositionModal, addComposition } from "../actions";
import { LatterCompositionList } from "./LatterCompositionList";
import { Button, ButtonToolbar } from 'react-bootstrap';
import { CompositionChainedModal } from './Modal/CompositionChainedModal';


class LatterCompositions extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSaveAndClose = this.handleSaveAndClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchCompositions()
  }

  handleShow() {
    this.props.toggleCompositionModal(this.props.showModal)
  }

  handleClose() {
    this.props.toggleCompositionModal(this.props.showModal)
  }

  handleSaveAndClose(state) {    
    state.id = ((this.props.compositions.slice(-1)[0].id) + 1) // id ostatniego composition + 1
    state.youtube_id = this.changedYutube(state.youtube_id)  // obcięcie url do samego id
    // console.info('LatterCompositions > handleSaveAndCLose passed state: ', state)
    this.props.addComposition([state])
    this.props.toggleCompositionModal(this.props.showModal)
  }

  changedYutube(url) {
    var ytIndex = url.lastIndexOf("?v=");
    var ytId = url.substring(ytIndex + 3);
    return ytId;
  }

  render() {
    return (
      <div>
        <div className="container-fluid pt100">
          <div className="row">
            <div className="col-md-12">
              <h2 className="lattercompositions-subtitle">LATTER COMPOSITIONS</h2>
            </div>
          </div>          
          <div className="row mt20">
            <div className="col-md-12">
              <p className="section-description">
                "It's Time" was released as the lead single from Continued Silence and It's
                Time, both extended plays preceding Night Visions' release.
              </p>
            </div>
          </div>
          <div className="row mt50">
            <LatterCompositionList compositionList={this.props.compositions}></LatterCompositionList>
          </div>
          <div className="row mt50">
            <div className="col-md-6 col-md-offset-3">
              <div className="mt20">
                <ButtonToolbar>
                <Button bsStyle="info" block onClick={this.handleShow}>
                Add composition
                </Button>
                <CompositionChainedModal show={this.props.showModal} onHide={this.handleClose} onHideAndSave={this.handleSaveAndClose}/>
                </ButtonToolbar>
              </div>
            </div>
          </div>
          {/* footer */}
          <div className="row mt120 bg bg-image-lc-footer">
            <div className="col-md-12">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    compositions: state.compositions,
    showModal: state.showModal
  };
};

const mapDispatchToProps = { 
  fetchCompositions,
  toggleCompositionModal,
  addComposition
};

export const LatterCompositionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LatterCompositions);