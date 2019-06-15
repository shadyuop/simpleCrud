import React, {Component} from 'react';
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired
};

const defaultProps = {
    name: "Default name"
}

class MyComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
 
  render() {
    const {title, name, onClick} = this.props;
    return (
        <div className="component">
            <h1>Title : {title}</h1>
            <h1>Title : {name}</h1>
            <div onClick={onClick}>Click Me</div>
        </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
