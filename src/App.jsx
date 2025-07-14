import React from 'react';
import FormBuilder from './components/FormBuilder';


class App extends React.Component {

  constructor(props) {
    console.log('App component is being constructed');
    super(props);
    this.state = {favoritefood: "rice"};
  }
 render() {
    console.log('App component is rendering');
    return (
      <FormBuilder></FormBuilder>
    );
  }
}

export default App
