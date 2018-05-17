// from: https://gist.github.com/insin/bbf116e8ea10ef38447b
import _ from 'underscore';
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import 'rc-calendar/assets/index.css';
import { InputGroup } from 'react-bootstrap';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

import './style.css';
import FormField from '../FormField';
import Mention from '../MarkdownInput/Mention';

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optionSelected: false,
      open: false,
    };
  }

  render() {
    const {
      help,
      label,
      prefix,
      noLabel,
      vertical,
      autoFocus,
      addonAfter,
      addonBefore,
      addonCustomBefore,
      addonCustomAfter,
      input: { ...inputProps },
      meta,
      disabled,
      dateFormat,
      timeFormat,
      dateTimeFormat,
      options,
      maxCols,
      showTimeSelect,
      showDateSelect,
    } = this.props;

    if (!showTimeSelect && !showDateSelect) {
      return (
        <span className="text-danger">
          Must enable <code>showTimeSelect</code> or <code>showDateSelect</code>
        </span>
      );
    }

    const timePickerElement = <TimePickerPanel defaultValue={moment('00:00:00', 'HH:mm:ss')} />;

    const modeProp = {};
    let format = showTimeSelect ? dateTimeFormat : dateFormat;
    if (!showDateSelect) {
      modeProp.mode = 'time';
      format = timeFormat;
    }
    const calendar = (
      <Calendar
        autoFocus={autoFocus}
        // bsSize="small"
        format={format}
        timePicker={showTimeSelect ? timePickerElement : null}
        style={{ zIndex: 10000 }}
        {...modeProp}
        className={!showDateSelect ? 'time-picker' : ''}
        renderFooter={() => {
          if (!options) {
            return null;
          }

          return (
            <div className="datetime-options">
              <span>Or, select an option:</span>
              <div className="datetime-options-list">
                {options.map(o => (
                  <Mention
                    key={o.textValue}
                    mention={o}
                    onClick={() => {
                      inputProps.onChange(o.textValue);
                      this.setState({ optionSelected: true, open: false });
                    }}
                  />
                ))}
              </div>
            </div>
          );
        }}
      />
    );

    let valueToUse = null;

    let m = null;
    if (_.isObject(inputProps.value)) {
      m = moment(inputProps.value);
    }

    if (m && _.isFunction(m.isValid) && m.isValid()) {
      valueToUse = m;
    }

    let input = (
      <DatePicker
        animation="slide-up"
        disabled={disabled}
        calendar={calendar}
        value={valueToUse}
        onOpenChange={(open) => {
          this.setState({ open });
        }}
        open={this.state.open}
        onChange={(date) => {
          inputProps.onChange(date ? moment(date).toDate() : '');
          this.setState({ optionSelected: false });
        }}
      >
        {({ value }) => (
          <span>
            {!this.state.optionSelected && (
              <input
                placeholder="please select"
                disabled={disabled}
                readOnly
                tabIndex="-1"
                className="form-control form-control-no-readonly"
                value={(value && value.format(format)) || ''}
              />
            )}
            {this.state.optionSelected && (
              <span className="form-control">
                <span className="form-control-template-value">
                  {options.find(o => o.textValue === inputProps.value).name}
                </span>
              </span>
            )}
          </span>
        )}
      </DatePicker>
    );

    if (addonBefore || addonAfter) {
      input = (
        <InputGroup style={{ width: '100%' }}>
          {addonBefore && <InputGroup.Addon>{addonBefore}</InputGroup.Addon>}
          {input}
          {addonAfter && <InputGroup.Addon>{addonAfter}</InputGroup.Addon>}
        </InputGroup>
      );
    }

    if (addonCustomBefore || addonCustomAfter) {
      input = (
        <InputGroup style={{ width: '100%' }}>
          {addonCustomBefore}
          {input}
          {addonCustomAfter}
        </InputGroup>
      );
    }

    return (
      <FormField
        label={label}
        prefix={prefix}
        meta={meta}
        help={help}
        vertical={vertical}
        noLabel={noLabel}
        maxCols={maxCols}
      >
        {input}
      </FormField>
    );
  }
}

DateInput.shouldComponentUpdate = FormField.shouldFormFieldUpdate;

DateInput.propTypes = {
  meta: PropTypes.shape().isRequired,
  vertical: PropTypes.bool,
  autoFocus: PropTypes.bool,
  help: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  options: PropTypes.arrayOf(PropTypes.shape()),
  prefix: PropTypes.node,
  input: PropTypes.shape().isRequired,
  noLabel: PropTypes.bool,
  disabled: PropTypes.bool,
  addonAfter: PropTypes.string,
  addonBefore: PropTypes.string,
  addonCustomAfter: PropTypes.node,
  addonCustomBefore: PropTypes.node,
  maxCols: PropTypes.number,

  // specific to the date picker
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
  dateTimeFormat: PropTypes.string,
  showTimeSelect: PropTypes.bool,
  showDateSelect: PropTypes.bool,
};

DateInput.defaultProps = {
  disabled: false,
  autoFocus: false,
  help: '',
  label: '',
  vertical: false,
  onPaste: () => {},
  prefix: null,
  noLabel: false,
  addonAfter: null,
  addonBefore: null,
  addonCustomAfter: null,
  addonCustomBefore: null,
  options: null,
  maxCols: 12,
  timeFormat: 'LT',
  dateFormat: 'LL',
  dateTimeFormat: 'LLL',
  showTimeSelect: true,
  showDateSelect: true,
};

export default DateInput;
