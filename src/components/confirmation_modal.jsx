import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "./modal";

class ConfirmationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };

    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { isOpen: nextProps.isOpen };
  }

  shouldComponentUpdate() {
    return true;
  }

  handleCancelClick() {
    if (this.props.onCancelClick) {
      this.props.onCancelClick();
    }

    this.setState({ isOpen: false });
  }

  render() {
    let { header, body, onConfirmClick } = this.props;
    let { isOpen } = this.state;

    return (
      <Modal isOpen={isOpen}>
        <div className="confirmation-modal">
          <div className="confirmation-modal--header">{header}</div>
          <div className="confirmation-modal--body">{body}</div>
          <div className="confirmation-modal--footer u-t-right">
            <button type="button" className="button u-margin-8--right" onClick={onConfirmClick}>
              Confirm
            </button>
            <button type="button" className="button" onClick={this.handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onConfirmClick: PropTypes.func,
  onCancelClick: PropTypes.func
};

export default ConfirmationModal;
