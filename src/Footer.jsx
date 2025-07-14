import React from "react";



/****
 * 
 * to manage variable we use two ways 1- state 2- props 
 * 
 * state local variable of component and it can be changed by using setState
 * 
 * Mounting. ----> when ever the component render/ refresh. First called contructor second called render third called componentDidMount
 * 
 * Updating
 * 
 * 
 *  * Unmounting
 * 
 * 
 * 
 * 
 */


/// lifcecycl methods
class Footer extends React.Component {

  constructor(props) {
    super(props);
    // This will not change the prop value, as props are read-only
    this.state = {
      year: new Date().getFullYear(), // Initialize state with the current year
      count: 0, // Initialize count state
      list: []
   }
    
  }

  // When ever you want to do on refresh do it here
  componentDidMount() {
    console.log("Footer componentDidMount called");

    
    // You can perform any setup here, like fetching data
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Footer componentDidUpdate called");
    // You can perform actions based on state or props changes
  }

  clicKMe = () => {
    this.setState({
      count: this.state.count + 1 // Increment count by 1
    })
    
  }

  componentWillUnmount() {
    console.log("Footer componentWillUnmount called");
    // Cleanup actions before the component is removed from the DOM
  }


  render() {
    console.log("Footer render called");
    
    return (
      <div>
        <footer>
          <p>Count {this.state.count}</p>

          <p>{this.props?.myData?.name}</p>
          <button onClick={()=>this.clicKMe()}>Click Me</button>
          <p>© {this.state.year} My React App. All rights reserved 222ddddvfds.</p>
        </footer>
      </div>
    );
  }


}


export default Footer;