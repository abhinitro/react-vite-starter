import React, { Component, PureComponent } from 'react';
import Counter from '../components/Counter';

class Blog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0 ,loading: true }; // Initialize loading state
    
  }

  componentDidMount() {
     
    setTimeout(() => {
      this.setState({ loading: false }); // Set loading to false after data is loaded
    }, 2000); // Simulate a 2-second loading time
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if count is not 2
    return nextState.count !== 2;         

  }

  increment = () => {

    if (this.state.count === 2) {
      this.setState({ count: 2 });
    } else {
      this.setState((prevState) => ({ count: prevState.count + 1 }));

    }

  };

  render() {
    console.log('Rendering with count:', this.state.count);
    return (
      <div>
        <Counter count={this.state.count} increment={this.increment}  isLoading={this.state.loading} />
      </div>
    );
  }
}

export default Blog;
