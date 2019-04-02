import * as React from "react";
import { Modal } from 'react-bootstrap';
import CompositionForm from './CompositionForm';


export class CompositionChainedModal extends React.Component {
	constructor(props, context) {
      super(props, context);

    	this.state = {
    		isSubOpen: false
    	};

    	this.openSubModal = this.openSubModal.bind(this);
    	this.hideSubModal = this.hideSubModal.bind(this);
    	this.saveAndHideSubModal = this.saveAndHideSubModal.bind(this);  	
 	}

	componentDidUpdate() {
		// console.info('CompositionChainedModal update: ', this.state)
	}

	openSubModal(dataPassed) {
		this.setState({
	      isSubOpen: true,
	      dataPassed: dataPassed
	    });
	}

	hideSubModal() {
		this.setState({
	      isSubOpen: false,
	      dataPassed: undefined
	    });
	}

	saveAndHideSubModal() {
		this.props.onHideAndSave(this.state.dataPassed)
		this.hideSubModal();
		this.props.onHide()
	}

	submit = (values) => {
	    // console.info(values);
	    this.openSubModal(values);
	 }

  render() {
  	const {onHideAndSave, ...modalProps} = this.props;
  	const passed = this.state.dataPassed;

    return (
      <div>
            <Modal 
            	{...modalProps}
            	bsSize="small"
        		aria-labelledby="contained-modal-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">Add new Composition</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <CompositionForm onSubmit={this.submit} />

                <Modal 
                	show={this.state.isSubOpen} 
                	onHide={this.hideSubModal} 
                	bsSize="small"
                	>
                  <Modal.Header>
                    <Modal.Title>Check informations</Modal.Title>
                  </Modal.Header>
                                    
                  	{passed ?
                  		<Modal.Body>
		                    <div><span>Title: </span><pre>{passed.title}</pre></div>
		                    <div><span>Author: </span><pre>{passed.author}</pre></div>
		                    <div><span>Description: </span><pre>{passed.description}</pre></div>
		                    <div><span>Date: </span><pre>{passed.date}</pre></div>
		                    <div><span>Youtube url: </span><pre>{passed.youtube_id}</pre></div>
		                    <div><span>Itunes url: </span><pre>{passed.itunes_url}</pre></div>
	                    </Modal.Body>
	                    : null
                    }
                  
                  <Modal.Footer>
	                <button className='btn btn-default' onClick={this.hideSubModal}>
	                  Check again
	                </button>
	                <button className='btn btn-primary' onClick={this.saveAndHideSubModal}>
	                  Add Composition
	                </button>
	              </Modal.Footer>
                </Modal>
              </Modal.Body>
            </Modal>
      </div>
    );
  }
}