import css from 'dom-css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

class ShadowScrollbars extends Component {
  constructor(props) {
    super(props);
    this.shadowTop = React.createRef();
    this.shadowBottom = React.createRef();
  }

  handleUpdate = values => {
    // const { shadowTop, shadowBottom } = this.refs;
    const { scrollTop, scrollHeight, clientHeight } = values;
    const shadowTopOpacity = (1 / 20) * Math.min(scrollTop, 20);
    const bottomScrollTop = scrollHeight - clientHeight;
    const shadowBottomOpacity =
      (1 / 20) * (bottomScrollTop - Math.max(scrollTop, bottomScrollTop - 20));
    console.log('THIS SHAODW TOP', this.shadowTop);
    // css(this.shadowTop, { opacity: shadowTopOpacity });
    this.shadowTop.current.style.opacity = shadowTopOpacity;
    // css(this.shadowBottom.current.style, { opacity: shadowBottomOpacity });
    this.shadowBottom.current.style.opacity = shadowBottomOpacity;
  };

  render() {
    const { style, ...props } = this.props;
    const containerStyle = {
      ...style,
      position: 'relative',
    };
    const shadowTopStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 10,
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
    };
    const shadowBottomStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 10,
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
    };
    return (
      <div style={containerStyle}>
        {/* <Scrollbars ref="scrollbars" onUpdate={this.handleUpdate} {...props} /> */}
        <Scrollbars onUpdate={this.handleUpdate} {...props} />
        <div ref={this.shadowTop} style={shadowTopStyle} />
        <div ref={this.shadowBottom} style={shadowBottomStyle} />
      </div>
    );
  }
}

ShadowScrollbars.propTypes = {
  style: PropTypes.object,
};

export default ShadowScrollbars;
