import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };

    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  // static getDerivedStateFromProps(state, props) {
  //   if (state.isOpen !== props.isOpen) {
  //     return { isOpen: true };
  //   }

  //   return null;
  // }

  // componentDidUpdate() {
  //   if (this.state.isOpen !== this.props.isOpen) {
  //     this.setState({ isOpen: true });
  //   }
  // }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleOverlayClick() {
    this.toggleModal();
  }

  handleContentClick(ev) {
    ev.stopPropagation();
    return false;
  }

  render() {
    if (!this.state.isOpen) {
      return null;
    }

    return (
      <div className="modal-overlay" onClick={this.handleOverlayClick}>
        <div className="modal-content" onClick={this.handleContentClick}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Modal;
