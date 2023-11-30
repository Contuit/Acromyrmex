import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Popover } from '../../utility/UiComponents';
import Icon from '../Icon';

function HoverHelp({ help, position, name }) {
  const helpPopover = (
    <Popover id={`field-${name}-help`} placement="left">
      <Popover.Body>{help}</Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger={['hover', 'focus']}
      placement={position}
      overlay={helpPopover}
      rootClose
    >
      <span>
        <Icon help />
      </span>
    </OverlayTrigger>
  );
}

// Define property types
HoverHelp.propTypes = {
  help: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  position: PropTypes.string,
};

HoverHelp.defaultProps = {
  position: 'right',
  name: 'na',
  help: '',
};

export default HoverHelp;
