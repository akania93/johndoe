import React from 'react';
import { connect } from "react-redux";
import {Field, reduxForm} from 'redux-form';
import { renderDatePickerComponent } from "./Datepicker"
import './form-inputs.css';

let CompositionForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form onSubmit={handleSubmit} autoComplete="off">  
      <div>
        <label>Title</label>
        <div>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
            required
          />
        </div>
      </div>
      <div>
        <label>Author</label>
        <div>
          <Field
            name="author"
            component="input"
            type="text"
            placeholder="Author"
            required
          />
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field name="description" component="textarea" required />
        </div>
      </div>
      <div>
        <label>Date</label>
        <div>
          <Field
            name="date"
            component={renderDatePickerComponent}
            type="date"
            placeholder="Date"
            required
          />
        </div>
      </div>
      <div>
        <label>Youtube url</label>
        <div>
          <Field
            name="youtube_id"
            component="input"
            type="text"
            placeholder="Youtube url"
            required
          />
        </div>
      </div>
      <div>
        <label>Itunes url</label>
        <div>
          <Field
            name="itunes_url"
            component="input"
            type="text"
            placeholder="Itunes url"
            disabled
          />
        </div>
      </div>
      <hr />
      <div style={{paddingLeft: "90px"}}>
        <button className="btn btn-link" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Next</button>       
      </div>
    </form>
  )
}

// export default reduxForm({
//   form: 'compositionForm' // a unique identifier for this form
// })(CompositionForm)

CompositionForm = reduxForm({ 
  form: 'compositionForm',
  enableReinitialize : true 
})(CompositionForm);

export default connect(state => ({ 
  // alternatively, you can set initial values here...
  initialValues: {
    itunes_url: 'https://www.apple.com/itunes/',
    youtube_id: 'https://www.youtube.com/watch?v=YlUKcNNmywk'
  } 
}))(CompositionForm);