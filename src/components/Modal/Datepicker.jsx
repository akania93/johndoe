import * as React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'
import './datepicker.css';

export class renderDatePickerComponent extends React.Component {
  static propTypes = {
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.bool,
    }),
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: ''
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (date) {
    this.props.input.onChange(moment(date).format('DD.MM.YYYY'))
  }

  render () {
    const {
      input, placeholder,
      meta: {touched, error}
    } = this.props

    return (
      <div>
        <DatePicker
          {...input}
          placeholder={placeholder}
          dateFormat="DD.MM.YYYY"
          selected={input.value ? moment(input.value, 'DD.MM.YYYY') : null}
          onChange={this.handleChange}
        />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
}