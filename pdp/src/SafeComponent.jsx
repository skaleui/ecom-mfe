import React from "react";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    console.log('SafeComponent:catching error')
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("componentDidCatch : " + error, errorInfo);
  }

  render() {
    console.log('SafeComponent:render', this.state)

    if (this.state.hasError === true) {
      console.log('SafeComponent:rendering error', this.state)
      return <h1>Something went wrong.</h1>;
    } 
    
    return this.props.children;
  }
}

